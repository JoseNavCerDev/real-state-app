import { Property, Price, Category } from '../../models/relations-model.js';

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