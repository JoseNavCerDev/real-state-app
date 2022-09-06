import { check, validationResult } from 'express-validator';

import User from '../../models/user-model.js';

const userCreateNew = async (req,res) => {

    //Validacion name field by express-validator
    await check('name').notEmpty().withMessage('Name is required').run(req);
    await check('email').isEmail().withMessage('It is not an email').run(req);
    await check('password').isLength( { min : 6 } ).
        withMessage('Password must be at least 6 characters').run(req);
    await check('password_confirmation').equals('password').
        withMessage('Passwords must be equals').run(req);
    
    let result = validationResult(req);

    //Verify to array errors is void
    if(!result.isEmpty()){
        return res.render('auth/register', {
            page: 'Create account',
            errors: result.array()
        })
    }

    console.log(result.array());

    //const user = await User.create(req.body);
    //return res.json(req.body);
}

export default userCreateNew;