import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

import User from '../../models/user-model.js';

const changePasswords = async (req,res) => {

    const { password } = req.body;

    //Validate token
    const { token } = req.params;
    const user = await User.findOne( { where : { token } } );

    //Validate passwords
    await check('password').isLength( { min : 6 } ).
        withMessage('Password must be at least 6 characters').run(req);
    await check('password_confirmation').equals(password).
        withMessage('Passwords must be equals').run(req);

    //Errors storage in validation
    let result = validationResult(req);

    //Validation passwords
    if(!result.isEmpty()){
        return res.render('auth/change-password', {
            page: 'Change password account',
            csrfToken: req.csrfToken(),
            errors: result.array(),
        })
    }

    //Erase token
    user.token = null;

    //Hashing new pasword
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    //Saving changes
    await user.save();

    //Verify to array errors is void
    if(result.isEmpty()){
        return res.render('messages/generic-message', {
            page: 'Password changed succesfully',
            msg: 'Your password has been changed correctly, you can close this window',
            csrfToken: req.csrfToken(),
        })
    }


    
    
    
    
 
}

export default changePasswords;