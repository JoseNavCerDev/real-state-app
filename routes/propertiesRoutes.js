import express from 'express';

import createNewProperty from '../controllers/properties/create-new-property.js';
import getProperties from '../controllers/properties/get-properties.js';

const propertiesRouter = express.Router();

propertiesRouter.get('/my-properties', getProperties);

//Get Test endpoint
propertiesRouter.get('/create-property', createNewProperty);

export default propertiesRouter;
