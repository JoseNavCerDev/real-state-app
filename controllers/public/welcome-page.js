

const welcomePage = (req,res) => {

    return res.render('auth/main-page', {
        page: 'Start'
    });

}

export default welcomePage;