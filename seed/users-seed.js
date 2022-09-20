import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Fidencio de Jesus',
        email: 'fidencio.jesus@outlook.com',
        confirm: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default users;