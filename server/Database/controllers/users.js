const mysql = require('mysql')
const pool = require('../../sql/connection')
const axios = require('axios')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {handleSQLError} = require('../../sql/error')

const saltRounds = 10

const getAllUsers = (req,res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  let sql = 'SELECT * FROM users WHERE user_id = ?';
  const replacements = [req.params.user_id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows);
  })
}



const createUser = (req, res) => {
  // Insert into users username, password, first name, last name
  let sql = "INSERT INTO users (user_name, user_password, first_name, last_name, email, city, state) VALUES (?, ?, ?, ?, ?, ?, ?)"
  // What goes into brackets
  const { user_name, user_password, first_name, last_name, email, city, state } = req.body

  //encryption of password
  bcrypt.hash(user_password, saltRounds, function(err, hash) {
    sql = mysql.format(sql, [user_name, hash, first_name, last_name, email, city, state])

  pool.query(sql, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
      return handleSQLError(res, err)
    }
    return res.send('Sign-up successful')
  })
  })
  
}

// const login = (req, res) => {
//   const { user_name, user_password } = req.body

//   axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     data: {
//       grant_type: 'password',
//       user_name: user_name,
//       user_password: user_password,
//       audience: process.env.AUTH0_IDENTITY,
//       connection: 'Username-Password-Authentication',
//       scope: 'openid',
//       client_id: process.env.AUTH0_CLIENT_ID,
//       client_secret: process.env.AUTH0_CLIENT_SECRET
//     }
//   })
//   .then(response => {
//     const { access_token } = response.data
//     res.json({
//       access_token
//     })
//   })
//   .catch(e => {
//     res.send(e)
//   })

// }

const login = (req, res) => {
  console.log(req.body, "console")
  let sql = "SELECT * FROM users WHERE user_name = ?"
  const { user_name, user_password } = req.body
  sql = mysql.format(sql, [ user_name ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    if (!rows.length) return res.status(404).send('No matching users')

    const hash = rows[0].user_password
    bcrypt.compare(user_password, hash)
      .then(result => {
        if (!result) return res.status(400).send('Invalid password')

        const data = { ...rows[0] }
        data.password = 'REDACTED'

        const token = jwt.sign(data, 'secret')
        res.json({
          msg: 'Login successful',
          token
        })
      })
  })
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  login
}