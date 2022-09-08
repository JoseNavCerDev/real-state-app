

const resetPassword = async (req,res) => {
    
    //Validation fields by express-validator
    await check('email').isEmail().withMessage('It is not an email').run(req);
    
    //Erros storage in validation
    let result = validationResult(req);

    //Verify to array errors is void
    if(!result.isEmpty()){
        return res.render('auth/forget-password', {
            page: 'Create account',
            errors: result.array(),
            csrfToken: req.csrfToken()            
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
}

export default resetPassword;