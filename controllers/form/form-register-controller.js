

const FormRegisterController = (req,res) => {
    res.render('auth/register', {
        page: 'Create account'
    });
}

export default FormRegisterController;