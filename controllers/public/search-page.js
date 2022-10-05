import Property from "../../models/property-model.js";
import Price from "../../models/price-model.js";

import { Sequelize } from 'sequelize';

const searchPage = async (req,res) => {

    const { ending : wordToSearch } = req.body;

    if(!wordToSearch){
        return res.redirect('back');
    }

    console.log(wordToSearch);

    try {
        
        //Sequelize function to search MATCH WORDs
        const properties = await Property.findAll({
            where: {
                title: {
                    [Sequelize.Op.like] : '%' + wordToSearch + '%'
                }
            },
            include: [
                { model: Price }
            ]
        });

        //console.log(properties);

        return res.render('auth/search', {
            page: 'Searching results',
            properties,
            csrfToken: req.csrfToken()
        });

    } catch (error) {

        console.log(error);
        
    }

}

export default searchPage;