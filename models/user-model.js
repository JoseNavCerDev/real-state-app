import { DataTypes } from 'sequelize';
import db from '../config/ddbb.js';
import bcrypt from 'bcrypt';

import hashPassword from '../helpers/hash-password.js';

const User = db.define(
    'users',
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        token: DataTypes.STRING,
        confirm: DataTypes.BOOLEAN
    },{
        /* hooks:{
            beforeCreate: hashPassword(User.password)
        } */
        scopes:{
            userAvoidParameters:{
                attributes:{
                    exclude: ['password', 'token', 'confirm', 'createdAt', 'updatedAt']
                }
            }

        }
    } 
);

export default User;