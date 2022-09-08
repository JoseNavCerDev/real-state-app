

const formForgetPasswordController = (req,res) => {
    res.render('auth/forget-password', {
        page : 'Password Change',
        csrfToken: req.csrfToken() 
    });
}

export default formForgetPasswordController;