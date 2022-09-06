import sequelize from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const ddbb = new sequelize(
    process.env.DATABASE_NAME,
    process.env.USER_DATABASE,
    process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DATABASE_DIALECT,
        define:{
            timestamps: true
        },
        pool:{                  //Connection configurations server
            max:5,              //Max simultaneus connections
            min:0,              //Min simultaneus connections
            acquire:30000,      //Time after mark error
            idle:10000          //Time to finish connection
        },
        operatorAliases: false
    }
);

export default ddbb;