const knex = require('./../helpers/initKnex')

module.exports = {
  select: (req) => knex.select(req.query.filter).from('todos'),
  insert: (req) => knex('todos').insert(req.body),
  update: (req) => knex('todos').where({ id: req.params.id }).update(req.body),
  delete: (req) => knex('todos').where({ id: req.params.id }).del()
}
