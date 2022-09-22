import Category from './category-model.js';
import Price from './price-model.js';
import Property from './property-model.js';
import User from './user-model.js';

//Relation 1:1

//The next both sentences are the same:

//Price.hasOne(Property);
Property.belongsTo(Price, {foreignKey: 'idPrice'});
Property.belongsTo(Category, {foreignKey: 'idCategory'});
Property.belongsTo(User, {foreignKey: 'idUser'});

export {
   Category,
   Price,
   Property,
   User 
}