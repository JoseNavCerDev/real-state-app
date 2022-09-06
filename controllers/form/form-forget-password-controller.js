

const formForgetPasswordController = (req,res) => {
    res.render('auth/forget-password', {
        page : 'Password Change'
    });
}

export default formForgetPasswordController;