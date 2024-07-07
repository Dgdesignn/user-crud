const express = require('express');
const {
    getAllUsers,
    getUserByEmail,
    updateUser,
    removeUser,
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();



router.get('/user',authMiddleware,getAllUsers);
router.get('/user/:email',authMiddleware,getUserByEmail)
      .put('/user/:id', authMiddleware,updateUser)
      .delete('/user/:id',authMiddleware, removeUser);


module.exports = router;

