const express = require('express');
const userController = require('../controller/users');
const router = express.Router();

// Register
router.post('/', userController.createNewUser);

// Login
router.post('/login', userController.loginUser);

// Read
router.get('/', userController.getAllUsers);

// Update 
router.patch('/:idUser', userController.updateUser);

// Delete
router.delete('/:idUser', userController.deleteUser);

module.exports = router;
