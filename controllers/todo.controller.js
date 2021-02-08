const knex = require('./../helpers/initKnex')

module.exports = {
  select: async (req, res, next) => {
    const doesSelect = await knex.select(req.query.filter).from('todos')
    res.send(doesSelect)
  },
  insert: async (req, res, next) => {
    const doesInsert = await knex('todos').insert(req.body)
    res.send(doesInsert)
  },
  update: async (req, res, next) => {
    const id = req.params.id
    const doesUpdate = await knex('todos').where({id})  // {id : id}
    .update(req.body)
    res.send({doesUpdate})
  },
  delete: async (req, res, next) => {
    const id = req.params.id
    const doesDelete = await knex('todos').where({id})  // {id : id}
    .del()
    res.send({doesDelete})
  },
}
