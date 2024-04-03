const express = require('express');
const router = express.Router();
const {PostPresence,updateUser, getUser, deleteUser} = require('../Controller/PresenceController.js');



// router.get('/user',getUser)
router.post('/presence', PostPresence);
// router.put('/user/:id',updateUser);
// router.delete('/user/:id',deleteUser);

// router.delete('/:id', UserController.deleteUser);


module.exports = router;