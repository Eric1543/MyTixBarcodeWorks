// var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;
mongoose.promise = Promise;

//make user a Schema
var UserSchema = new Schema ({
  username: {
    type: String,
    // required: "Username is Required"
  },
  password: {
    type: String,
    // required: "Password is Required"
  }
});

// Define schema methods
UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
  this.password = this.hashPassword(this.password)
  next()
})


// UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);

//hash password before Creating user

    //console.log("BEFORE HASH: " + user.password);
   // User.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    //console.log("AFTER HASH: " + user.password);
// UserSchema.pre('save', function(next) {
//   const user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     bcrypt.hash(user.password, salt, null, (error, hash) => {
//       if (error) {
//         return next(error);
//       }
//       console.log('HASH: ', hash);
//       user.password = hash;
//       console.log('USER.PASSWORD: ', user.password);
//       next();
//     });
//   });
// });

// //instance function to validate password
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };



module.exports = User;

// //hash password before Creating user
//   User.hook('beforeCreate', function(user, options) {
//     //console.log("BEFORE HASH: " + user.password);
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     //console.log("AFTER HASH: " + user.password);
//   });

// //instance function to validate password
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };


  //   return User;
  // };