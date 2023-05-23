
function index(req, res, next) {
    res.render('index', { title: 'Developer Skills' });
  };

 

module.exports = {
    index,
}