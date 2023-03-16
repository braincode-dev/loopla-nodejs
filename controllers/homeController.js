
exports.getHomePage = (req, res) => {
    const port = process.env.PORT || 3000;

    res.status(200).render('index', {
        title: 'Home page',
        status: 'success',
        port: port
    });
  };