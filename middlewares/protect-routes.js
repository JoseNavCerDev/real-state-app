import jwt from 'jsonwebtoken';

import User from '../models/user-model.js';

const protectRoutes = async (req, res, next) => {
    
    //Verify token        
    const token = req.cookies._token;

    //There's not some token ?
    if(!req.cookies._token){
        return res.redirect('/api/user/login');
    }
    
    //If token exists... is valid ?
    try {

        //Decoder and validated token
        const tokenDecoder = jwt.verify(token, process.env.JWT_SECRET);

        //Consult user info with SEQUELIZE SCOPE FUNCTION
        const user = await User.scope('userAvoidParameters').findByPk(tokenDecoder.id);

        //User is still active in the company ?
        if(user){
            req.user = user;
        } else {
            return res.redirect('/api/user/login');
        }        
        return next();

    } catch (error) {
        res.clearCookie('_token').redirect('/api/user/login')
    }    

    next();
}

export default protectRoutes;