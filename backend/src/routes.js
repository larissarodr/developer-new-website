const express = require("express");

const EmailController = require('./controllers/EmailController');
const NewsController = require('./controllers/NewsController');

const routes = express.Router();

routes.post('/sendEmail', EmailController.sendEmail);
routes.get('/news', NewsController.retrieveNews);

module.exports = routes;
