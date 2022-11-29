import { check, validationResult } from "express-validator";
import User from "../../models/user-model.js";

import emailPasswordChange from '../../helpers/email-password-change.js';
import tokenGenerator from '../../helpers/token-generator.js';

const resetPassword = async (req,res) => {

    const { email } = req.body;

    console.log(email);
    
    //Validation fields by express-validator
    await check('email').isEmail().withMessage('It is not an email').run(req);
    
    //Error storage in validation
    let result = validationResult(req);

    //Verify to array errors is void
    if(!result.isEmpty()){
        return res.render('auth/forget-password', {
            page: 'Password change',
            errors: result.array(),
            csrfToken: req.csrfToken()            
        })
    }  

    //Check if the new email exists
    let user = null;
    try {
        user = await User.findOne( { where : { email } } );
    } catch (error) {
        console.log(error);
    }
    
    //Invalid email
    if(!user){
        return res.render('auth/generic-message', {
            page: "There's email is not registered",
            msg: "Something was wrong...maybe could be invalid email",
            error: true
        });
    }

    const { id, name } = user.dataValues;

    //Token generator with user ID
    const token = tokenGenerator( { id, name} );

    //Confirmation email
    emailPasswordChange( {
        email,
        name,
        token
    } );

    user.token = token;

    await user.save();

    //Show change password message 
    res.render('messages/generic-message', {
        page: `Email send to ${email} account`,
        msg: "We've send you an email with instructions... check it out to continue",
        csrfToken: req.csrfToken() 
    })
}

export default resetPassword;