import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
}

export default hashPassword;
