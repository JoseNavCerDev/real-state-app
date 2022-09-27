import Property from "../models/property-model.js";

const userOwnerProperty = async (req,res) => {

    const { id } = req.params;

    try {
        
        const property = await Property.findByPk(id);

        if(!property.idUser.toString() === req.user.id.toString()){
            return res.redirect('/api/properties/my-properties')
        }

        req.property = property;

        next();

    } catch (error) {

        if(!property.idUser.toString() === req.user.id.toString()){
            return res.redirect('/api/properties/my-properties')
        }
        
    }    

}

export default userOwnerProperty;