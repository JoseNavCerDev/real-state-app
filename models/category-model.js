import { DataTypes } from "sequelize";
import db from '../config/ddbb.js';

const Category = db.define('categories', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    categories_name: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
});

export default Category;