import colors from 'colors';

import Category from "../../models/category-model.js";
import Price from "../../models/price-model.js";
import Property from "../../models/property-model.js";

import isSaler from '../../helpers/is-saler.js';


const showPublicProperty = async (req,res) => {

    const { id } = req.params;
    
    try {

        const property = await Property.findOne({
            where: {
                id
            },
            include:[
                { model: Category },
                { model: Price }
            ]
        });

        //
        req.property = property;
        req.saler = isSaler(req.user?.id, property.idUser)


        return res.render('properties/show-public-properties', {
            page: property.title,
            property,
            csrfToken: req.csrfToken(),
            user: req.user,
            isSaler: req.saler
        });

    } catch (error) {

        console.log(error);

        return res.redirect('/api/public/notFound');
    }

}

export default showPublicProperty;