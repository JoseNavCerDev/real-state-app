import User from "../../models/user-model.js";

const userValidateEmail = async(req,res) => {
    
    const { token } = req.params;

    //Token validation
    const user = await User.findOne( { where : { token } } );

    //Token doesn't exist
    if(!user){
        return res.render('auth/confirm-account', {
            page: "Error confirmation account",
            msg: "Something was wrong...maybe could be invalid token",
            error: true
        });
    }

    //Erase token
    user.token = null;

    //Change status confirm FIELD
    user.confirm = true;

    //Save user
    try {
        await user.save();   
        return res.render('auth/confirm-account', {
            page: "Success validation",
            msg: "Already has been validate... you can close this window",
            error: false
        });
    } catch (error) {
        console.log(error.msg);
    }
}

export default userValidateEmail;