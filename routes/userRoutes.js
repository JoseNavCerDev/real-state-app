import express from 'express';

import formLoginController from '../controllers/form/form-login-controller.js';
import formRegisterController from '../controllers/form/form-register-controller.js';
import formForgetPasswordController from '../controllers/form/form-forget-password-controller.js';
import resetPassword from '../controllers/form/form-reset-password.js';

import userCreateNew from '../controllers/user/user-create-new.js';
import userValidateEmail from '../controllers/user/user-validate-email.js';
import userValidateChangePassword from '../controllers/user/user-validate-change-password.js';
import userChangePassword from '../controllers/user/user-change-password.js';

const userRouter = express.Router();

//Login endpoint
userRouter.get('/login', formLoginController);

//Register endpoint
userRouter.get('/register', formRegisterController);

//Validate email after register endpoint
userRouter.get('/validate-email/:token', userValidateEmail);

//Validate change password with token
userRouter.get('/change-password/:token', userValidateChangePassword);
userRouter.post('/change-password', userChangePassword);

//Forget password endpoint
userRouter.get('/forget-password', formForgetPasswordController);

//Reset password endpoint
userRouter.post('/reset-password', resetPassword);

//New User endpoint
userRouter.post('/register', userCreateNew);


export default userRouter;