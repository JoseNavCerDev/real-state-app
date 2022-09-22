import multer from 'multer';
import path from 'path';

import generateId from '../helpers/id-generator.js'

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public/uploads/');
    },
    filename: function(req,file,cb){
        cb(null, generateId() + '_' + path.extname(file.originalname));
    }
});

const upload = multer( { storage } )

export default upload;