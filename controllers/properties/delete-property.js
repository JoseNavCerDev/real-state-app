import { unlink } from 'node:fs/promises';
import Property from "../../models/property-model.js";

const deleteProperty = async (req,res) => {
    
    try {

        const property = await Property.findByPk(req.params.id);

        //Erase images from property
        await unlink(`public/uploads/${property.image}`);

        await property.destroy();

        res.redirect('/api/properties/my-properties');
        
    } catch (error) {
        
    }

}

export default deleteProperty;