import Property from "../models/property-model.js";

const isValidateProperty = async (req,res) =>{

    const { id } = req.params;

    //Validate property isn't publicated
    if(property.isPublicated){
        return res.redirect('/api/properties/my-properties')
    }

    next();

}

export default isValidateProperty;