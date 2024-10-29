In the routes folder, define your API endpoints and their associated controller methods. This promotes modularity and makes your API endpoints easier to manage.

// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');


const router = express.Router();


router.get('/users', userController.getUser);


module.exports = router;