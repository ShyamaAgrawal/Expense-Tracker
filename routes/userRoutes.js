const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/authentication');

// User authentication routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);

// Protected routes for users
router.get('/user', authenticateUser, userController.getUserDetails);
router.put('/user', authenticateUser, userController.updateUserDetails);
router.delete('/user', authenticateUser, userController.deleteUserAccount);

// router.get('/addid', userController.adding);
router.post('/:id/addexpense', authenticateUser, userController.addExpense);
router.post('/:id/addincome', authenticateUser, userController.addIncome);


module.exports = router;