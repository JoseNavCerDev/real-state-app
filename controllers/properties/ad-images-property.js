
const adImagesAfterSaveProperty = (req, res) => {
    const { id } = req.params;  

    res.render('properties/ad-image', {
        page: `Ad Images ${req.property}`,
        property: req.property,
        csrfToken: req.csrfToken()
    });
}

export default adImagesAfterSaveProperty;