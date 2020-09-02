function errorHandler (err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            const is404 = err.toLoweCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json( { message: err } );
            break;
        case err.name === 'ValidationError':
            // Mongoose Validation Error
            return res.status(400).json( { message: err.message } );
            break;
        case err.name === 'UnauthorizedError':
            // JWT Authentication Error
            return res.status(401).json({ message: 'Unauthorized' });
            break;
        default:
            return res.status(500).json({ message: err.message });
            break;
    }
}

module.exports = errorHandler;