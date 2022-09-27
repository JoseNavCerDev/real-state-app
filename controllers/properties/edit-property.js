import Category from "../../models/category-model.js";
import Price from "../../models/price-model.js";
import Property from "../../models/property-model.js";
import User from '../../models/user-model.js';

const editProperty = async (req,res) => {

    //Consult property and category
    const [categories, prices, properties] = await Promise.all([
        Category.findAll(),
        Price.findAll(),
        Property.findAll()
    ]);

    const { id } = req.params;

    let property = {};

    //Property exist ?
    try {

        property = await Property.findByPk(id);

    } catch (error) {

        console.error(error);    

        return res.render('properties/view-admin', {
            page : 'Edit property',
            properties,
            data: req.body
        }); 
    }


    //User has attributes ?    
    try {

        const user = await User.findByPk(req.user.id);

        if(user.id.toString() !== property.idUser.toString()){

            return res.render('properties/view-admin', {
                page : 'Edit property',
                properties,
                data: req.body
            });
        }  

    } catch (error) {

        console.error(error);

        return res.render('properties/view-admin', {
            page : 'Edit property',
            properties,
            data: req.body
        });
    }
   
   return res.render('properties/edit', {
        page : 'Edit property',
        csrfToken: req.csrfToken(),
        categories,
        prices,
        data: property
    });  

}


export default editProperty;