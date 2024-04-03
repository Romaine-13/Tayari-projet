// Importer les modules nécessaires
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { PrismaClient } = require('@prisma/client');
const passportJwt = require('passport-jwt');
const jwt = require('jsonwebtoken');
const config = require('./config'); 
const config = require('./config');
// Fichier de configuration contenant la clé secrète

// Initialiser Prisma
const prisma = new PrismaClient();

// Configuration de la stratégie JWT pour Passport
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
  try {
    const user = await prisma.user.findOne({ where: { id: jwt_payload.sub } });

    if (user) {
      // Générer un token JWT
      const token = jwt.sign({ sub: user.id }, config.secretOrKey, { expiresIn: '1h' });
      return done(null, user, { token });
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
}));