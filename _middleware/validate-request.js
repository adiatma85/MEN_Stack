function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
    };

    const { error, value } = Schema.validate(req.body, options);

    // If error
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

module.exports = validateRequest;