

const notFoundPage = async (req,res) => {
    return res.render('auth/not-found', {
        page: "Not Found",
        csrfToken: req.csrfToken()
    });

}

export default notFoundPage;