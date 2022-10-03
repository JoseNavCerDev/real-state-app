import Category from "../../models/category-model.js";
import Price from "../../models/price-model.js";
import Property from "../../models/property-model.js";


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

        return res.render('properties/show-public-properties', {
            page: property.title,
            property,
            csrfToken: req.csrfToken()
        });

    } catch (error) {
        console.log(error);
    }

}

export default showPublicProperty;