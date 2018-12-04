const Post = require('../models/post.js');
const User = require('../models/user.js')
module.exports = function(app) {
    
    // INDEX
    app.get('/', (req, res) => {
        Post.find()
            .then(post => {
                res.render('posts-index', { post: post });
            })
            .catch(err => {
                console.log(err.message);
            });
    });
    // NEW
    app.get('/posts/new', (req, res) => {
        res.render('posts-new', {})
    })
    
    // CREATE
    app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
        const post = new Post(req.body);
        
        // SAVE INSTANCE OF POST MODEL TO DB
        post.save((err, post) => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/`);
            
        })
    })

    // Show single post
    app.get('/posts/:id', function(req, res) {
        Post.findById(req.params.id)
            .then(post => {
                res.render('post-show', { post });
            })
            .catch(err => {
                console.log(err.message)
            });
    });

    // SIGN UP FORM
    app.get("/sign-up", (req, res) => {
        res.render("sign-up");
    });

    app.post("/sign-up", (req, res) => {
        // Create User
        const user = new User(req.body);
        user
            .save()
            .then(user => {
              res.redirect("/");
            })
            .catch(err => {
              console.log(err.message);
            });
    });

};