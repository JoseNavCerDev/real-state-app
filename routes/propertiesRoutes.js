import express from 'express';

import myProperties from '../controllers/properties/properties-controller.js';

const propertiesRouter = express.Router();

//Get Test endpoint
propertiesRouter.get('/my-properties', myProperties);

export default propertiesRouter;
