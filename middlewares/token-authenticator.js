import jwt from 'jsonwebtoken';

const tokenAutheticator = async (token) => {
    return await jwt.verify(token)
}

export default tokenAutheticator;