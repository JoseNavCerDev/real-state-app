

const FormRegisterController = (req,res) => {
    res.render('auth/register', {
        page: 'Create account',
        csrfToken: req.csrfToken()
    });
}

export default FormRegisterController;