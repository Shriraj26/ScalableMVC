const express = require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller')
console.log('Router Loaded');

//When at main page - just load the main router
router.get('/', homeController.home);

//But when at users or posts page - just load their respective routers
router.get('/users', require('./users'));
router.get('/posts', require('./posts'));

module.exports = router;

