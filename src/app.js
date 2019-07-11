const path = require('path')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


const app = express()

mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true })
  .then(db => console.log('mongodb connected'))
  .catch(err => console.error(err))

const indexRoutes = require('./routes/index')

//settings
  app.set('port', process.env.PORT || 9000)
  app.set('views', path.join(__dirname, "views"))
  app.set('view engine', 'ejs')

// middlewares
  app.use(morgan('dev'))
  app.use(express.urlencoded({
    extended: false
  }))

// routes
  app.use('/', indexRoutes)

// server start
  app.listen(app.get('port'), () =>{
    console.log('Server started on port '+app.get('port'))
  })