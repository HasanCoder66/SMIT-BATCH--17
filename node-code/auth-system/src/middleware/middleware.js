export const errorMiddleware = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500
    err.status = err.status || false

    return res.status(err.statusCode).json({
        status :err.status,
        message : err.message
    })
}