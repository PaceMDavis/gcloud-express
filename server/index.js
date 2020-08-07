
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usersRouter = require('./Database/routes/users')
const spotsRouter = require('./Database/routes/spots')
const socialRouter =require('../Database/routes/social')

const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:false,
  })
)
app.use(cors())
app.use('/users', usersRouter)
app.use('/spots', spotsRouter)
app.use('/social', socialRouter)


app.get('/', (req, res) => res.send('Welcome to the thunderdome'));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`)
})

