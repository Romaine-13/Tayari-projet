const express = require('express');
const router = express.Router();
const {PostUser,updateUser, getUser, deleteUser} = require('../Controller/UserController');
const { getLocation } = require('../Controller/GpsControler');




router.get('/user',getUser)
router.post('/user/post', PostUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.post('/location/', getLocation)

// router.delete('/:id', UserController.deleteUser);


module.exports = router;