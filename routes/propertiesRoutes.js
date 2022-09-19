import express from 'express';

import createNewProperty from '../controllers/properties/create-new-property.js';
import getProperties from '../controllers/properties/get-properties.js';
import saveNewProperty from '../controllers/properties/save-new-property.js';

const propertiesRouter = express.Router();

//Get all properties
propertiesRouter.get('/my-properties', getProperties);

//Get Test endpoint
propertiesRouter.get('/create-property', createNewProperty);

//Save new property
propertiesRouter.post('/create-property', saveNewProperty);

export default propertiesRouter;
