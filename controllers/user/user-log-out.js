
const logOut = async(req,res) => {

    return res.clearCookie('_token').status(200).redirect('/api/user/login');

}

export default logOut;