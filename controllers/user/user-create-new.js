import { check, validationResult } from 'express-validator';

import User from '../../models/user-model.js';

const userCreateNew = async (req,res) => {

    const {name, email, password } = req.body;

    //Validacion name field by express-validator
    await check('name').notEmpty().withMessage('Name is required').run(req);
    await check('email').isEmail().withMessage('It is not an email').run(req);
    await check('password').isLength( { min : 6 } ).
        withMessage('Password must be at least 6 characters').run(req);
    await check('password_confirmation').equals(password).
        withMessage('Passwords must be equals').run(req);
    
    let result = validationResult(req);

    //Verify to array errors is void
    if(!result.isEmpty()){
        return res.render('auth/register', {
            page: 'Create account',
            errors: result.array(),
            user: {
                name: req.body.name,
                email: req.body.email
            }
        })
    }

    const duplicateUser = await User.findOne( { where : { email : req.body.email } } );

    if(duplicateUser){
        return res.render('auth/register', {
            page: 'Create account',
            errors: [ { msg : 'User is already register' } ],
            user: {
                name: req.body.name,
                email: req.body.email
            }
        })
    }   

    //New user storage
    await User.create({
        name,
        email,
        password,
        token: 1234
    }); 
}

export default userCreateNew;