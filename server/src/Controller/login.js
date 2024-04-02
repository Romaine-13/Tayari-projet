const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Configuration de la stratégie d'authentification locale
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Vérification de l'utilisateur et du mot de passe dans la base de données
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Nom d\'utilisateur incorrect.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Mot de passe incorrect.' });
      }
      return done(null, user);
    });
  }
));

// Configuration de la sérialisation et de la désérialisation de la session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Middleware d'initialisation de Passport
app.use(passport.initialize());
app.use(passport.session());