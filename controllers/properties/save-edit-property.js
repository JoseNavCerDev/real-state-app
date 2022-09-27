import Price from '../../models/price-model.js';
import Category from '../../models/category-model.js';
import Property from '../../models/property-model.js';

//Form to create a new property
const saveEditProperty = async (req,res) => {

    const { id } = req.params;

    //Property exist ?
    try {

        const property = await Property.findByPk(id);

        //Overwrite object property with new data
        await property.set(req.body);

        await property.save();

        //return res.redirect('/api/properties/my-properties') 
        
        return res.render('properties/view-admin', {
            page : 'Edit property',
            csrfToken: req.csrfToken(),
            properties: await Property.findAll(),
            data: req.body
        }); 

    } catch (error) {

        console.error(error);    
        
        return res.render('properties/view-admin', {
            page : 'Edit property',
            properties: await Property.findAll(),
            data: req.body
        }); 
    }
}

export default saveEditProperty;