
const Router = require('express').Router()
const userRoute =require('./userRoutes')
const employeeRoute =require('./employeeRoutes')





Router.use('/user',userRoute)
Router.use('/employee',employeeRoute)









module.exports=Router



