import Property from "../../models/property-model.js";


const showPublicProperty = async (req,res) => {
    
    const property = await Property.findByPk(req.params.id);

    console.log(property);

    return res.render('properties/show-public-properties', {
        
    })

}

export default showPublicProperty;