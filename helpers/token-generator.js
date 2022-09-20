import jwt from 'jsonwebtoken';

const tokenGenerator = (userInfo) => {
    return jwt.sign( 
        userInfo,        
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
}

export default tokenGenerator;