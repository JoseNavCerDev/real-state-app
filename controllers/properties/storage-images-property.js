import Property from "../../models/property-model.js";

const storageImage = async (req,res, next) => {
    
    //Get filename after upload with multer
    const { filename } = req.file;

    try {        
        //Check in DDBB previous to save images and change isPublicated state
        const property = await Property.findByPk(req.params.id);
        
        //Save path image
        property.image = filename;

        //Change isPublicated state
        property.isPublicated = true;

        await property.save();

        next();

    } catch (error) {
        console.log(error);
    }

}

export default storageImage;