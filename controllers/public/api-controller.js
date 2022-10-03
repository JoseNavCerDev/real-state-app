import Property from "../../models/property-model.js";
import Price from "../../models/price-model.js";
import Category from "../../models/category-model.js";

const properties = async (req,res) => {

    const properties = await Property.findAll({
        include:[
            {model: Price},
            {model: Category}
        ]

    });

    return res.json(properties);

}

export default properties;