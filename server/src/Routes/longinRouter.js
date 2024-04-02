const router = express.Router();


app.get('/login', function(req, res) {
    res.render('login'); // Afficher le formulaire de connexion
  });
  
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile', // Redirection en cas de succès
    failureRedirect: '/login', // Redirection en cas d'échec
  }));
  
  app.get('/profile', isAuthenticated, function(req, res) {
    res.render('profile', { user: req.user }); // Afficher le profil de l'utilisateur authentifié
  });
  
  app.get('/logout', function(req, res) {
    req.logout(); // Déconnexion de l'utilisateur
    res.redirect('/login');
  });