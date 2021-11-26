const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

const localStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    
    function (email, password, done) {
        User.findOne({where: {email} })
        .then(user => {
    
            if(!user) return done(null, false, {message: "Nombre de usuario incorrecto."});
            
            user.createHash(password, user.salt)
            .then(hash => {
                
                if(hash !== user.password) return done(null, false, {message: "Password incorrecto."});
                
                done(null, user);
            })
        })
        .catch(done);
    }
);

module.exports = localStrategy;