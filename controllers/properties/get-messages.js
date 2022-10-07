import { Property, Message, User } from "../../models/relations-model.js";

const getMessages = async (req,res) => {

    const { id } = req.params;

    let properties = {};

    try {
        
        properties = await Property.findByPk(id, {
            include: [
                {model: Message,
                    include: [
                        {model: User}
                    ]
                }
            ]
        });

    } catch (error) {
        console.error(error);
    }

    return res.render('properties/message-properties', {
        page: 'Messages',
        message: properties.messages
    });
    
}

export default getMessages;