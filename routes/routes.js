import express from 'express';

import userRoutes from './userRoutes.js';
import propertiesRoutes from './propertiesRoutes.js';

const routes = express.Router();

//Routing User
routes.use('/user', userRoutes);

//Routing properties
routes.use('/properties', propertiesRoutes);

export default routes;