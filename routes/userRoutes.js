import express from 'express';

import formLoginController from '../controllers/form/form-login-controller.js';
import formRegisterController from '../controllers/form/form-register-controller.js';
import formForgetPasswordController from '../controllers/form/form-forget-password-controller.js';
import resetPassword from '../controllers/form/form-reset-password.js';

import userCreateNew from '../controllers/user/user-create-new.js';
import userValidateEmail from '../controllers/user/user-validate-email.js';

const userRouter = express.Router();

//Login endpoint
userRouter.get('/login', formLoginController);

//Register endpoint
userRouter.get('/register', formRegisterController);

//Validate email after register endpoint
userRouter.get('/validate-email/:token', userValidateEmail);

//Forget password endpoint
userRouter.get('/forget-password', formForgetPasswordController);

//Reset password endpoint
userRouter.post('/reset-password', resetPassword);

//New User endpoint
userRouter.post('/register', userCreateNew);


export default userRouter;