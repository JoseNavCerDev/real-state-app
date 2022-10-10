import { Property, Message, User } from "../../models/relations-model.js";

//Helper for DATE FORMATER
import dateFormat from "../../helpers/date-format.js";

const getMessages = async (req,res) => {

    const { id } = req.params;

    let properties = {};

    try {
        
        properties = await Property.findByPk(id, {
            include: [
                {model: Message,
                    include: [ //SCOPE used for not use fields in JOIN
                        {model: User.scope('userAvoidParameters')}
                    ]
                }
            ]
        });

    } catch (error) {
        console.error(error);
    }

    return res.render('properties/message-properties', {
        page: 'Messages',
        message: properties.messages,
        dateFormat
    });
    
}

export default getMessages;