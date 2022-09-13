import bcrypt from 'bcrypt';

const checkPassword = async (passwordForm, passwordDDBB) => {
    return bcrypt.compareSync(passwordForm, passwordDDBB);
}

export default checkPassword;