import { DataTypes } from "sequelize";
import db from '../config/ddbb.js';

const Property = db.define('properties', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    rooms:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parking:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wc:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lat:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lng:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPublicated:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    idPrice:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCategory:{
        type: DataTypes.UUID,
        allowNull: false
    },
    idUser:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Property;