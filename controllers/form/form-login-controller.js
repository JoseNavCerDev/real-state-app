

const formLogin = (req,res) => {
    res.render('auth/login', {
        page : 'Log In',
        csrfToken: req.csrfToken()
    });
}

export default formLogin;