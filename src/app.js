const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

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
    console.log('Server started an port '+app.get('port'))
  })