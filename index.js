const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
const indexRoute = require('./routes/index.route')
const todoRoute = require('./routes/todo.route')

app.use('/',indexRoute)
app.use('/todo',todoRoute)

app.listen(port,()=> console.log('run on http://localhost:'+port) )