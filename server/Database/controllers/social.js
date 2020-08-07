const mysql = require('mysql')
const pool = require('../../sql/connection')
const {handleSQLError} = require('../../sql/error')

const getAllSocial = (req,res) => {
  pool.query("SELECT * FROM social", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {
  getAllSocial
}