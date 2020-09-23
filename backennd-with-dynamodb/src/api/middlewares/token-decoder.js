function tokenDecoder(debug = false) {
    return (req, res, next) => {
        const { authorizer } = req.requestContext || {};
        const decoded = { user: authorizer && authorizer.claims ? JSON.parse(authorizer.claims) : null };

        if (debug) {
            console.log('token:', JSON.stringify(decoded, null, 2));
        }
        req.token = decoded;
        next();
    };
}

export default tokenDecoder;
