const todoModel = require('./../models/todo.model')
const createError = require('http-errors')

module.exports = {
  select: async (req, res, next) => {
    try {
      const doesSelect = await todoModel.select(req)
      res.send(doesSelect)
    } catch (error) {
      console.log(error)
      next(createError.InternalServerError())
    }
  },
  insert: async (req, res, next) => {
    try {
      const doesInsert = await todoModel.insert(req)
      res.send(doesInsert)
    } catch (error) {
      console.log(error)
      next(createError.InternalServerError())
    }
  },
  update: async (req, res, next) => {
    try {
      const doesUpdate = await todoModel.update(req)
      res.send({ doesUpdate })
    } catch (error) {
      console.log(error)
      next(createError.InternalServerError())
    }
  },
  delete: async (req, res, next) => {
    try {
      const doesDelete = await todoModel.delete(req)
      res.send({ doesDelete })
    } catch (error) {
      console.log(error)
      next(createError.InternalServerError())
    }
  }
}
