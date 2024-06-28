const { constants } = require("../constant")
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        titile: "Vaildation failed",
        message: err.message,
        stackTrace: err.stackTrace,
      })
    case constants.NOT_FOUND:
      res.json({
        titile: "Not found",
        message: err.message,
        stackTrace: err.stackTrace,
      })
    case constants.UNATUHORIZED_ERROR:
      res.json({
        titile: "unauthorized",
        message: err.message,
        stackTrace: err.stackTrace,
      })
    case constants.SERVER_ERROR:
      res.json({
        titile: "internal server error",
        message: err.message,
        stackTrace: err.stackTrace,
      })
    case constants.FORBIDDEN:
      res.json({
        titile: "forbidden",
        message: err.message,
        stackTrace: err.stackTrace,
      })

    default:
      break
  }
}

module.exports = errorHandler
