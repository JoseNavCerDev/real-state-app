import express from 'express';

import userRoutes from './userRoutes.js';
import propertiesRoutes from './propertiesRoutes.js';
import publicRoutes from './publicRoutes.js';

const routes = express.Router();

//Routing User
routes.use('/user', userRoutes);

//Routing properties
routes.use('/properties', propertiesRoutes);

//Public routes
routes.use('/public', publicRoutes);

export default routes;