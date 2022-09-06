

const formLogin = (req,res) => {
    res.render('auth/login', {
        page : 'Log In'
    });
}

export default formLogin;