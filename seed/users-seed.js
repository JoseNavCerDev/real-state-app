import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Fidencio de Jesus',
        email: 'fidencio.jesus@outlook.com',
        confirm: true,
        password: bcrypt.hashSync('password', 10)
    },
    {
        name: 'Lorena Vizcarra',
        email: 'lore.vizca@gmail.com',
        confirm: true,
        password: bcrypt.hashSync('password', 10)
    },
    {
        name: 'Axayacatl Ixcoatl de Jesus',
        email: 'ixco_jesus@ieee.org',
        confirm: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default users;