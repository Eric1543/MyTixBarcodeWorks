
var path = require("path");
var User = require("../models/User.js");
var passport = require("../config/passport");


module.exports = function(app){

	app.get("/", function(req, res){
		// console.log(res);
		// console.log('hit')
		// res.json({tst: 'hi'})
		res.sendFile(path.join(__dirname, "../public/login.html"));
	});

	app.get("/register", function(req, res){
		// console.log(res);
		// console.log('hit')
		// res.json({tst: 'hi'})
		res.sendFile(path.join(__dirname, "../public/register.html"));
	});

	// app.post('/login/:id', function(req, res){
	// 	console.log(req.body);
	// 	User.findOne({
	// 		"username": req.body.username
			
	// 	}).exec(function(error, doc){
	// 		if(error){
	// 			res.send(error);
	// 		}
	// 		//if the username doesnt exist in the database do this
	// 		// if(!username){
	// 		// 	console.log('we dont have this username');
	// 		// }
	// 		else{
	// 			// console.log(passport);
	// 			res.sendFile(path.join(__dirname, "../public/index.html"));
	// 		}
	// 	});
	// });

	    //login to app
  app.post("/login", passport.authenticate("local"), function(req, res){
    // console.log("Login Succesful");
    res.json("login");
    // res.json("/members");
     //this needs to change to the page that the
  });

	app.post("/api/user", function(req, res){
		// res.json(req.body);
		var entry = new User(req.body);

		entry.save(function(err, doc){
			if(err){
				console.log(err);
			}

			else{
				// console.log(doc);
				res.sendFile(path.join(__dirname, "../public/index.html"));
			}
		})
	
	})

	// app.post('/login',
	//   passport.authenticate('local', 
	//   	{ successRedirect: '/',
	//       failureRedirect: '/login',
	//       failureFlash: true })
	// );

}


  // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test --env=jsdom",
  //   "eject": "react-scripts eject"