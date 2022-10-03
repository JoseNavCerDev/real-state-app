import express from 'express';

import showProperty from '../controllers/public/show-public-property.js';
import welcomePage from '../controllers/public/welcome-page.js';
import searchPage from '../controllers/public/search-page.js';
import notFoundPage from '../controllers/public/not-found-page.js';
import categoriesPage from '../controllers/public/categories-page.js';
import apiController from '../controllers/public/api-controller.js';
 
const publicRoutes = express.Router();

//Main page
publicRoutes.get('/welcome', welcomePage);

//404 Page
publicRoutes.get('/not-found', notFoundPage);

//Categories
publicRoutes.get('/categories', categoriesPage);

//Search
publicRoutes.get('/search', searchPage);

//Show property
publicRoutes.get('/property/:id', showProperty);

//API properties
publicRoutes.get('/properties', apiController);



export default publicRoutes;