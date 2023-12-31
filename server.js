if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//import router into server
const indexRouter = require('./routes/index')

//set view engine, views and layout accordingly
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

//use public files in public folder
app.use(express.static('public'))

//mongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewURLParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

//tell app to use indexRouter to handle root
app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)