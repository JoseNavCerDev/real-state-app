import Category from './category-model.js';
import Price from './price-model.js';
import Property from './property-model.js';
import User from './user-model.js';
import Message from './message-model.js';

//Relation 1:1

//The next both sentences are the same:

//Price.hasOne(Property);

Property.belongsTo(Price, {foreignKey: 'idPrice'});
Property.belongsTo(Category, {foreignKey: 'idCategory'});
Property.belongsTo(User, {foreignKey: 'idUser'});
Property.hasMany(Message, { foreignKey: 'propertyId' } );

Message.belongsTo(Property, {foreignKey: 'propertyId'});
Message.belongsTo(User, {foreignKey: 'userId'});

export {
   Category,
   Price,
   Property,
   User,
   Message
}