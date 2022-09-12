import { check, validationResult } from 'express-validator';

const changePasswords = async (req,res) => {

    const { password, password_confirmation } = req.body;

    /* await check('password').isLength( { min : 6 } ).
        withMessage('Password must be at least 6 characters').run(req);
    await check('password_confirmation').equals(password).
        withMessage('Passwords must be equals').run(req);

    console.log(req.params, req.body);

    //Errors storage in validation
    let result = validationResult(req);

    //Verify to array errors is void
    if(!result.isEmpty()){
        return res.render('auth/change-password', {
            page: 'Change password account gfgf',
            errors: result.array(),
            csrfToken: req.csrfToken()
        })
    }

    */

    return res.render('messages/generic-message', {
        page: 'Change password account',
        msg: 'Please change your password',
        csrfToken: req.csrfToken()
    });

}

export default changePasswords;