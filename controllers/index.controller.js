module.exports = {
  get: (req, res, next) => {
    const name = req.params.name + req.params.firstName
    const numberQuery = req.query.number
    console.log(numberQuery)
    res.send({ message: 'Hello get ' + name })
  },
  post: (req, res, next) => {
    const doesData = req.body.message
    res.send({ message: doesData })
  },
  put: (req, res, next) => {
    res.send({ message: 'Hello put ' })
  },
  delete: (req, res, next) => {
    res.send({ message: 'Hello delete ' })
  }
}
