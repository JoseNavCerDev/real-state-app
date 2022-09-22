import express from 'express';

import createNewProperty from '../controllers/properties/create-new-property.js';
import getProperties from '../controllers/properties/get-properties.js';
import saveNewProperty from '../controllers/properties/save-new-property.js';
import adImagesAfterSaveProperty from '../controllers/properties/ad-images-property.js';
import storageImage from '../controllers/properties/storage-images-property.js';

import protectRoutes from '../middlewares/protect-routes.js';
import validateProperty from '../middlewares/validate-property.js';
import uploadImage from '../middlewares/upload-image.js';

const propertiesRouter = express.Router();

//Get all properties
propertiesRouter.get('/my-properties', protectRoutes, getProperties);

//Get Test endpoint
propertiesRouter.get('/create-property', protectRoutes, createNewProperty);

//Save new property
propertiesRouter.post('/create-property', protectRoutes, saveNewProperty);

//Ad properties
propertiesRouter.get('/ad-images/:id', protectRoutes, validateProperty, adImagesAfterSaveProperty);

//Storage images property
propertiesRouter.post('/ad-images/:id', protectRoutes, validateProperty, uploadImage.single('image') , storageImage);

export default propertiesRouter;
