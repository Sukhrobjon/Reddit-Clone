const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const Post = require("../models/post");
chai.use(chaiHttp);

describe("site", () => {
    // Describe what you are testing
    it("Should have home page", done => {
        // Describe what should happen
        // In this case we test that the home page loads
        chai
            .request("localhost:3000")
            .get("/")
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                res.status.should.be.equal(200);
                return done(); // Call done if the test completed successfully.
            });
    });
});
// requires to get server
// const server = require('../server')

describe("Post", () => {
    it("should create with valid attributes at POST /posts", done => {
        
        // Import your Post model
        
        var post = { title: "post title", url: "https://www.google.com", summary: "post summary" };

        Post.findOneAndRemove(post, function () {
            Post.find(function (err, posts) {
                var postCount = posts.length;
                chai
                    .request('localhost:3000')
                    .post("/posts/new")
                    .send(post)
                    .then(res => {
                        Post.find(function (err, posts) {
                            postCount.should.be.equal(posts.length - 1);
                            res.should.have.status(200);
                            return done();
                        });
                    })
                    .catch(err => {
                        return done(err);
                    });
            });
        });

    });
});
