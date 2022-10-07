import jwt from 'jsonwebtoken';
import User from '../models/user-model.js';

const identifyUser = async(req,res, next) => {

    //Token exists ?

    const { _token } = req.cookies;

    if(!_token){
        req.user = null;
        return next();    
    }

   
    //Check token
    try {

        const decoded = jwt.verify(_token, process.env.JWT_SECRET);
        const user = await User.scope('userAvoidParameters').findByPk(decoded.id);

        if(user){
            req.user = user;
        }
        
    } catch (error) {
        console.log(error);
        return res.clearCookie('_token').redirect('auth/login');
    }

    return next();
}

export default identifyUser;