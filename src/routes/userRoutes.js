const express = require('express');
const {
    getAllUsers,
    getUserByEmail,
    updateUser,
    removeUser,
    removeAllUser
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');


const router = express.Router();



router.get('/authors',authMiddleware, roleMiddleware(['admin']),getAllUsers);
router.get('/authors/:email',authMiddleware, roleMiddleware(['admin']), getUserByEmail)
      .put('/auhtors/:id', authMiddleware,updateUser)
      .delete('/authors/:id',authMiddleware, removeUser)//Remove apenas um usuário
      .delete('/dunp-authors/:',authMiddleware, roleMiddleware(['admin']),removeAllUser);//Remove tods usários


module.exports = router;

