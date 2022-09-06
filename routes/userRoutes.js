import express from 'express';

import formLoginController from '../controllers/form/form-login-controller.js';
import formRegisterController from '../controllers/form/form-register-controller.js';
import formForgetPasswordController from '../controllers/form/form-forget-password-controller.js';

import userCreateNew from '../controllers/user/user-create-new.js';

const userRouter = express.Router();

//Login endpoint
userRouter.get('/login', formLoginController);

//Register endpoint
userRouter.get('/register', formRegisterController);

//Forget password endpoint
userRouter.get('/forget-password', formForgetPasswordController);

//New User endpoint
userRouter.post('/register', userCreateNew);


export default userRouter;