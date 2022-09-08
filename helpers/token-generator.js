import jwt from 'jsonwebtoken';

const tokenGenerator = (data) => {
    return jwt.sign( 
        { data },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
}

export default tokenGenerator;