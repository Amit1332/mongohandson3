const Router = require('express').Router()
const { createEmployee, AllEmployee, filter } = require('../controller/employeeController')



Router.post('/create', createEmployee)

Router.get('/', AllEmployee)
Router.post('/filter', filter)








module.exports=Router