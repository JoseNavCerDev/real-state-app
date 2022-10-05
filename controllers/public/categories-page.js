import Category from "../../models/category-model.js";
import Property from "../../models/property-model.js";
import Price from "../../models/price-model.js";


const categoriesPage = async (req,res) => {

    const { id } = req.params;

    let category = {};
    let properties = {};

    //Get Categories
    try {
        category = await Category.findByPk(id);
    } catch (error) {
        console.log(error);
        return res.redirect('/api/public/not-found');        
    }

    //Get Properties
    try {

        properties = await Property.findAll({
            where: {
                idCategory: id
            },
            include:[
                {
                    model: Price
                }
            ]
        });

    } catch (error) {
        console.log(error);
        return res.redirect('/api/public/not-found');
    }

    return res.render('templates/category', {
        page: `${category.categories_name}s on sale`,
        properties,
        csrfToken: req.csrfToken()
    });


    

   

}

export default categoriesPage;