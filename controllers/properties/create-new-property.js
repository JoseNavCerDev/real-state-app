import Price from '../../models/price-model.js';
import Category from '../../models/category-model.js';


//Form to create a new property
const createNewProperty = async (req,res) => {
    
    //Consult property and category
    const [categories, prices] = await Promise.all([
        Category.findAll(),
        Price.findAll()
    ]);
    
    return res.render('properties/create', {
        page : 'Post new property',
        csrfToken: req.csrfToken(),
        navbar: true,
        categories,
        prices,
        data: req.body
    }); 
}

export default createNewProperty;