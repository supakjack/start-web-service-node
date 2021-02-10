const express = require('express')
const createError = require('http-errors')
const app = express()
const port = 3001

app.use(express.json())
const indexRoute = require('./routes/index.route')
const todoRoute = require('./routes/todo.route')

app.use('/', indexRoute)
app.use('/todo', todoRoute)

app.use((req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status,
      message: err.message
    }
  })
})

app.listen(port, () => console.log('run on http://localhost:' + port))
