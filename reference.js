var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/associate",{ useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//   name:"Mayank",
//   email:"mynk@mail.in"
// });

Post.create({
    title: "one more try",
    content: "Gajab Ki cheej hai bc"
},function(err,post){
    if(err)
        console.log(err);
    else
        User.findOne({name: "Mayank"},function(err,foundUser){
            if(err)
                console.log(err)
            else
                foundUser.posts.push(post);
                foundUser.save(function(err,data){
                    if(err)
                        console.log(err);
                    else
                        console.log(data);
                })
        })
})



// User.findOne({name:"Mayank"}).populate("posts").exec(function(err,user){
//     if(err)
//     console.log(err);
//     else
//     console.log(user);
// })