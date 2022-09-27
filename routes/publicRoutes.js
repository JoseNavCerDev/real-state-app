import express from 'express';

import showProperty from '../controllers/public/show-public-property.js';

const publicRoutes = express.Router();

//Show property
publicRoutes.get('/property/:id', showProperty);



export default publicRoutes;