import { check, validationResult } from 'express-validator';

import Property from "../../models/property-model.js";
import Category from '../../models/category-model.js';
import Price from '../../models/price-model.js';

const saveNewProperty = async (req,res) => {

    //Validation field of the form
    await check('title').notEmpty().withMessage('Title is required').run(req);
    await check('description').notEmpty().withMessage('At least 5 words are required').isLength({max:300}).withMessage('Description is to long...').run(req);
    await check('category').notEmpty().withMessage('Category is required').run(req);
    await check('price').notEmpty().withMessage('Price range is required').run(req);
    await check('rooms').notEmpty().withMessage('Rooms number is required').run(req);
    await check('parking').notEmpty().withMessage('Parking field is required').run(req);
    await check('wc').notEmpty().withMessage('WC number is required').run(req);

    //Error storage in validation
    let result = validationResult(req);

    //Are there errors ??
    if(!result.isEmpty()){

        //Consult property and category
        const [categories, prices] = await Promise.all([
            Category.findAll(),
            Price.findAll()
        ]);

        //Return the same page with all default fields    
        return res.render('properties/create', {
            page : 'Post new property',
            csrfToken: req.csrfToken(),
            navbar: true,
            categories,
            prices,
            errors: result.array(),
            data: req.body
        });
    }

    const { title, description, price, category, rooms, parking, wc, lat, lng, image } = req.body;

    //console.log(req.body);
    //console.log(price);



     


}

export default saveNewProperty;