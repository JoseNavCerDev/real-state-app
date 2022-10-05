import Property from "../../models/property-model.js";
import { Category, Price } from "../../models/relations-model.js";

const getProperties = async (req, res) => {

  //Pagination section after of all with query string
  const { page: pageByQuery } = req.query;

  //Regular Expression
  const regularExpression = /^[0-9]$/;

  if (!regularExpression.test(pageByQuery)) {
    return res.redirect("/api/properties/my-properties?page=1");
  }

  try {
    //Destructure id from req after middlewares validation
    const { id: idUser } = req.user;

    const limit = 10;
    const offset = pageByQuery * limit - limit;

    const [properties, total] = await Promise.all([
      //Consult in DDBB, all properties of the user (table properties with FK)
      Property.findAll({
        limit,
        offset,
        where: {
          idUser,
        },
        include: [
          {
            model: Category,
          },
          {
            model: Price,
          },
        ],
      }),
      Property.count({
        where: {
          idUser,
        },
      }),
    ]);


    return res.render("properties/view-admin", {
      page: "My properties",
      properties,
      csrfToken: req.csrfToken(),
      pagesNumber: Math.ceil(total / limit),
      pageByQuery: Number(pageByQuery),
      offset,
      limit,
      total,
      csrfToken: req.csrfToken()
    });
  } catch (error) {
    console.error(error);
  }
};

export default getProperties;
