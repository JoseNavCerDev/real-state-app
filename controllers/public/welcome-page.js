import { Property, Price, Category } from '../../models/relations-model.js';

const welcomePage = async (req,res) => {

    const [ categories, prices, houses, apartments ] = await Promise.all([
        Category.findAll({raw:true}),
        Price.findAll({raw:true}),
        Property.findAll({
            limit: 3,
            where: {
                idCategory: "22fd2489-44fb-411b-bd76-62b074726f64"
            },
            include: [
                {
                    model: Price,
                    as: 'price'
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        }),
        Property.findAll({
            limit: 3,
            where: {
                idCategory: "a971bd5b-aa73-497f-b050-ef8b8d2bdb7e"
            },
            include: [
                {
                    model: Price,
                    as: 'price'
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        }),
    ]);

    return res.render('auth/main-page', {
        page: 'Start',
        categories,
        prices,
        houses,
        apartments
    });

}

export default welcomePage;