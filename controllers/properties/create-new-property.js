
const createNewProperty = (req,res) => {
    return res.render('properties/create', {
        page : 'Post new property',
        csrfToken: req.csrfToken(),
        navbar: true
    }); 
}

export default createNewProperty;