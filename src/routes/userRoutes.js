const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    removeUser,
    login
} = require('../controllers/userController');
const userAuthmiddleware = require('../middleware/userAuth');


const router = express.Router();




router.post('/user/login', login);
router.post('/user/register', createUser)

      .get('/user',userAuthmiddleware,getAllUsers);
router.get('/user/:email',userAuthmiddleware,getUserByEmail)
      .put('/user/:id', userAuthmiddleware,updateUser)
      .delete('/user/:id',userAuthmiddleware, removeUser);


module.exports = router;

