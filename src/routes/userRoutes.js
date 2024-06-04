const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    removeUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/user', createUser)
      .get('/user',getAllUsers);

router.get('/user/:id',getUserById)
      .put('/user/:id', updateUser)
      .delete('/user/:id',removeUser);


module.exports = router;

