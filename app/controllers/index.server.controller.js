var express = require('express');
var router = express.Router();


var homeController = require('./controllers/homeController');
var aboutController = require('./controllers/aboutController');
var projectsController = require('./controllers/projectsController');
var contactController = require('./controllers/contactController');
var servicesController = require('./controllers/servicesController');
var submitController = require('./controllers/submitController');

/* GET home page */
router.get('/', homeController.getHome);

/* GET about page */
router.get('/about', aboutController.getAbout);

/* GET projects page */
router.get('/projects', projectsController.getProjects);

/* GET contact page */
router.get('/contact', contactController.getContact);

/* GET services page */
router.get('/services', servicesController.getServices);

/* GET submit page */
router.get('/submit', submitController.getSubmit);

module.exports = router;
