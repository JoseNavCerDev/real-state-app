import { Property } from "../../models/relations-model.js";


const changeStateIsPublicated = async(req,res) => {
    
    const { id } = req.params;

    let property = {};

    //Validate property exist and user is the OWNER
    try {
        property = await Property.findByPk(id);

        if(property.idUser.toString() !== req.user.id.toString()){
            return res.redirect('/api/properties/my-properties');
        }
        

    } catch (error) {
        console.log(error);
        return res.redirect('/api/properties/my-properties');
    }

    

   //Update isPublicated Field (change between true/false)
    property.isPublicated = !property.isPublicated;

    console.log(property.isPublicated);

    await property.save();

    res.json({
        msg: true
    }) 

}

export default changeStateIsPublicated;