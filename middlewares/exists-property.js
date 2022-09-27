import Property from "../models/property-model.js";

const existProperty = async (req,res) => {

    const { id } = req.params;

    try {

        const property = await Property.findByPk(id);

        return next();
        
    } catch (error) {
        
        console.error(error);
    }

} 

export default existProperty;