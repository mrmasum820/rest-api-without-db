const express = require('express');
const { getAllUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');
const router = express.Router();

//get method
router.get('/', getAllUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;