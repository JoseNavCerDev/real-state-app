
const adImagesAfterSaveProperty = (req, res) => {
    const { id } = req.params;
    console.log(id);    

    res.render('properties/ad-image', {
        page: 'Ad Images'
    });
}

export default adImagesAfterSaveProperty;