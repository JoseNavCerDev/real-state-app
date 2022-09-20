import { check, validationResult } from 'express-validator';

import tokenGenerator from '../../helpers/token-generator.js';
import emailRegister from '../../helpers/email-register.js';
import hashPassword from '../../helpers/hash-password.js';

import User from '../../models/user-model.js';

const userCreateNew = async (req,res) => {

    const {name, email, password } = req.body;

    //Validation fields by express-validator
    await check('name').notEmpty().withMessage('Name is required').run(req);
    await check('email').isEmail().withMessage('It is not an email').run(req);
    await check('password').isLength( { min : 6 } ).
        withMessage('Password must be at least 6 characters').run(req);
    await check('password_confirmation').equals(password).
        withMessage('Passwords must be equals').run(req);
    
    //Erros storage in validation
    let result = validationResult(req);

    //Verify to array errors is void
    if(!result.isEmpty()){
        return res.render('auth/register', {
            page: 'Create account',
            errors: result.array(),
            csrfToken: req.csrfToken(),
            user: {
                name: req.body.name,
                email: req.body.email
            }
        })
    }

    //Check if the new email is already registered
    const duplicateUser = await User.findOne( { where : { email : req.body.email } } );

    //If email user is duplicated
    if(duplicateUser){
        return res.render('auth/register', {
            page: 'Create account',
            errors: [ { msg : 'User is already register' } ],
            csrfToken: req.csrfToken(),
            user: {
                name: req.body.name,
                email: req.body.email
            }
        })
    }   

    //New user storage
    const user = await User.create({
        name,
        email,
        password : await hashPassword(password)
    });
    
    //Create token and register in DDBB
    user.token = tokenGenerator({
        /* id: user.id,
        name: user.name */
    }); 
    await user.save();

    //Confirmation email
    emailRegister({
        name: user.name,
        email: user.email,
        token: user.token
    });

    //Show confirmation message
    res.render('messages/register-succes', {
        page: "Sucessful register",
        msg: "We've send you an email... check it out to continue"
    })
}

export default userCreateNew;