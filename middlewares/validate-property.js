import Property from "../models/property-model.js";

const validateProperty = async (req, res, next) => {
    
    const { id } = req.params;

    try {

        //Validate property exist
        const property = await Property.findByPk(id);

        //Validate property isn't publicated
        if(property.isPublicated){
            return res.redirect('/api/properties/my-properties')
        }

        //Validate property is the correct user
        if(!property.idUser.toString() === req.user.id.toString()){
            return res.redirect('/api/properties/my-properties')
        }

        req.property = property;
    
        next();
        
    } catch (error) {
        console.error(error)
        return res.redirect('/api/properties/my-properties')    
    }
    

    
}

export default validateProperty;