// config.js

// Charger les variables d'environnement à partir du fichier .env
require('dotenv').config();

const passportJwt = require('passport-jwt');
const { ExtractJwt } = passportJwt;

// Récupération de la clé secrète JWT à partir des variables d'environnement
const secretKey = process.env.JWT_SECRET;

// Options JWT
const jwtOptions = {
jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

module.exports = jwtOptions;
