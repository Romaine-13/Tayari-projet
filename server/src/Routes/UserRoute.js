const express = require('express');
const router = express.Router();
const {PostUser,updateUser, getUser, deleteUser} = require('../Controller/UserController');



router.get('/user',getUser)
router.post('/user/post', PostUser);
router.put('/user/:id',updateUser);
router.put('/user/:id',updateUser);
router.put('/user/:id',deleteUser);

// router.delete('/:id', UserController.deleteUser);


module.exports = router;