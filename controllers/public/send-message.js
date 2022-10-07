import { check, validationResult } from "express-validator";

import { Message, Property, Price, Category } from "../../models/relations-model.js";


const sendMessage = async (req,res) => {

    const { message } = req.body;
    const { id } = req.params;

    await check('message').notEmpty().isLength({min: 10}).withMessage('Message is to short').run(req);

    //Error storage in validation
    let result = validationResult(req);

    let property = {};

    if(result.errors[0]){
        
        try {

            property = await Property.findOne({
                where: {
                    id
                },
                include:[
                    { model: Category },
                    { model: Price }
                ]
            });
            
            return res.render('properties/show-public-properties', {
                page: property.title,
                property,
                csrfToken: req.csrfToken(),
                user: req.user,
                isSaler: req.saler,
                errors: result.array(),

            });

        } catch (error) {
            console.log(error);
        }        
    }

    //Validation pass in this code part
    try {        

        await Message.create({
            message,
            propertyId: id,
            userId: req.user.id
        });

        return res.render('messages/generic-message', {
            page: "Message sending correctly",
            msg: "We've send your message to the owner... wait their response... Regards",
            _redirection: '/api/public/welcome',
            _redirectionMessage: "Start Page"
        });

    } catch (error) {
        console.log(error);
    } 
     
  

}

export default sendMessage;