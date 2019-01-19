'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '+p0t4t0s_SySt3m*';

function createToken(id) {
    const payload = {
        sub: id,
        iat: moment().unix(),
        exp: moment().add(30, 'minutes').unix()
    }
    return jwt.encode(payload, secret);
}

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ status: false, message: 'Se requiere autenticación' });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, secret);
    if (payload.exp <= moment().unix()) {
        return res.status(403).send({ status: false, message: 'El token ha expirado' });
    }
    return next()
}

module.exports = {
    createToken,
    isAuth
}