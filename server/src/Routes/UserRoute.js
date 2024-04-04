const express = require('express');
const router = express.Router();
const {postUser,updateUser, deleteUser, getAllUsers,getUser,loginUser} = require('../Controller/UserController');
const { getLocation } = require('../Controller/GpsControler');




router.get('/user/',getAllUsers)
router.get('/user',getUser)

// router.get('/protected-route', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.json({ message: 'Protected route accessed successfully' });
//   });
router.post('/login', loginUser, (req, res) => {
    // Redirection vers une autre page après le login
    res.redirect('/page-apres-login');
  });
  
    
router.post('/login',loginUser);
router.post('/user/', postUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.post('/location/', getLocation)

// router.delete('/:id', UserController.deleteUser);


module.exports = router;