module.exports = {
  get: (req, res, next) => {
    res.send({ message: 'Hello get ' })
  },
  post: (req, res, next) => {
    res.send({ message: 'Hello post ' })
  },
  put: (req, res, next) => {
    res.send({ message: 'Hello put ' })
  },
  delete: (req, res, next) => {
    res.send({ message: 'Hello delete ' })
  }
}
