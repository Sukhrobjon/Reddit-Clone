
module.exports = app => {
    
    // INDEX
    app.get('/', (req, res) => {
        res.render('home', { msg: 'Handlebars are Cool!'})
    })
    // NEW
    app.get('/posts/new', (req, res) => {
        res.render('posts-new')
    })
    
    // CREATE
    app.post("/posts/new", (req, res) => {
        console.log(req.body);
    });
};