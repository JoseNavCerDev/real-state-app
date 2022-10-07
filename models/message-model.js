import { DataTypes } from "sequelize";
import db from '../config/ddbb.js';

const Message = db.define('messages', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
});

export default Message;