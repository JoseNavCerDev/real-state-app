

const notFoundPage = async (req,res) => {
    return res.render('auth/not-found', {
        page: "Page Not Found",
        csrfToken: req.csrfToken()
    });

}

export default notFoundPage;