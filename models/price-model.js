import { DataTypes } from "sequelize";
import db from '../config/ddbb.js';

const Price = db.define('price', {
   /*  id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    }, */
    price_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Price;