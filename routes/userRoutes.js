const Router = require('express').Router()
const { signup, login } = require('../controller/userController')
const {passwordValid} = require('../middlewares')

 Router.post('/signup',passwordValid,signup)

 Router.post('/login',passwordValid,login)



  
module.exports=Router