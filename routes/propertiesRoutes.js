import express from 'express';

import createNewProperty from '../controllers/properties/create-new-property.js';
import getProperties from '../controllers/properties/get-properties.js';
import saveNewProperty from '../controllers/properties/save-new-property.js';
import adImagesAfterSaveProperty from '../controllers/properties/ad-images-property.js';
import storageImage from '../controllers/properties/storage-images-property.js';
import editProperty from '../controllers/properties/edit-property.js';
import saveEditProperty from '../controllers/properties/save-edit-property.js';
import deleteProperty from '../controllers/properties/delete-property.js';

import protectRoutes from '../middlewares/protect-routes.js';
import uploadImage from '../middlewares/upload-image.js';
import validateProperty from '../middlewares/validate-property.js';

const propertiesRouter = express.Router();

//Create property
propertiesRouter.get('/create-property', protectRoutes, createNewProperty);
propertiesRouter.post('/create-property', protectRoutes, saveNewProperty);

//Ad and storage property image
propertiesRouter.get('/ad-images/:id', protectRoutes, validateProperty, adImagesAfterSaveProperty);
propertiesRouter.post('/ad-images/:id', protectRoutes, validateProperty, uploadImage.single('image') , storageImage);

//Edit property
propertiesRouter.get('/edit-property/:id', protectRoutes, editProperty );
propertiesRouter.post('/edit-property/:id', protectRoutes, saveEditProperty );

//Get all properties
propertiesRouter.get('/my-properties', protectRoutes, getProperties);

//Delete property
propertiesRouter.post('/delete-property/:id', protectRoutes, deleteProperty);


export default propertiesRouter;
