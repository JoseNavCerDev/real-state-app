
const getProperties = (req,res) => {
    return res.render('properties/view-admin', {
        page : 'Log In',
        msg : "Succesful authentication",
        csrfToken: req.csrfToken(),
        navbar: true
    }); 
}

export default getProperties;