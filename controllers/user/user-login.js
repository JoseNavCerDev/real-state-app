import { check, validationResult } from 'express-validator';

import checkPassword from '../../helpers/check-password.js';
import tokenGenerator from '../../helpers/token-generator.js';

import User from '../../models/user-model.js';

const userLoginController = async (req,res) => {
    
    //Destructure
    const { email, password } = req.body;

    console.log(email, password);

    //express-validator fields
    await check('email').isEmail().withMessage('It is not an email').run(req);
    await check('password').isLength( { min : 6 } ).
        withMessage('Password is required').run(req);

    //Storage errors ONLY IN CASE
    let result = validationResult(req);

    //If errors exists
    if(!result.isEmpty()){
        return res.render('auth/login', {
            page : 'Log In',
            errors: result.array(),
            csrfToken: req.csrfToken()
        });
    }

    //User exists ?
    const userLogin = await User.findOne( { where : {email} } );

    //If user doesn't exist
    if(!userLogin){
        return res.render('auth/login', {
            page : 'Log In',
            errors: [{msg:'Inavlid email'}],
            csrfToken: req.csrfToken()
        });
    }

    //User is not confirmed ?
    if(!userLogin.confirm){
        return res.render('auth/login', {
            page : 'Log In',
            errors: [{msg:'Email is not confirmed in this user'}],
            csrfToken: req.csrfToken()
        });
    }

    //Check password hash(ddbb) and not hash(form)
    const passHash = await checkPassword(password, userLogin.password);

    //Password is incorrect ?
    if(!passHash){
        return res.render('auth/login', {
            page : 'Log In',
            errors: [{msg:'Incorrect password or email'}],
            csrfToken: req.csrfToken()
        });
    }


    /* return res.render('messages/generic-message', {
        page : 'Log In',
        msg : "Succesful authentication",
        csrfToken: req.csrfToken(),
        error: false
    }); */  

    const token = tokenGenerator({id: userLogin.id, name: userLogin.name});

    return res.cookie("_token", token, {
        httpOnly: true,
        //secure: true
    }).redirect('/api/properties/my-properties');
    
}

export default userLoginController;