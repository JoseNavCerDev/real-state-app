import Property from "../../models/property-model.js";
import { Category, Price } from '../../models/relations-model.js';

const getProperties = async (req,res) => {

    //Destructure id from req after middlewares validation
    const id = await req.user.id;

    try {

        //Consult in DDBB, all properties of the user (table properties with FK)
        const propertiesUser = await Property.findAll({
            where : {
                idUser : id
            },
            include: [
                {
                    model: Category
                },
                {
                    model: Price
                }
            ]
        })        

        return res.render('properties/view-admin', {
            page : 'My properties',
            properties: propertiesUser,
            csrfToken: req.csrfToken()
        }); 

    } catch (error) {
        console.error(error);        
    }    
    
    

    

}

export default getProperties;