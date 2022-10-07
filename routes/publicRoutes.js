import express from 'express';

import showProperty from '../controllers/public/show-public-property.js';
import welcomePage from '../controllers/public/welcome-page.js';
import searchPage from '../controllers/public/search-page.js';
import notFoundPage from '../controllers/public/not-found-page.js';
import categoriesPage from '../controllers/public/categories-page.js';
import apiController from '../controllers/public/api-controller.js';
import sendMessage from '../controllers/public/send-message.js';

//Middlewares
import identifyUser from '../middlewares/identify-user.js';
 
const publicRoutes = express.Router();

//Main page
publicRoutes.get('/welcome', welcomePage);

//404 Page
publicRoutes.get('/notFound', notFoundPage);

//Categories
publicRoutes.get('/categories/:id', categoriesPage);

//Search
publicRoutes.post('/search', searchPage);

//Show property
publicRoutes.get('/property/:id',identifyUser ,showProperty);
publicRoutes.post('/property/:id',identifyUser ,sendMessage);

//API properties
publicRoutes.get('/properties', apiController);



export default publicRoutes;