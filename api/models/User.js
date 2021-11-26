const S      = require("sequelize");
const db     = require("../config/db");
const bcrypt = require("bcrypt");


class User extends S.Model {}

User.init({
    fullname: {
        type: S.STRING,
        allowNull: false
    },

    email: {
        type: S.STRING,
        allowNull: false,
        validate: {isEmail: true}
    },

    password: {
        type: S.STRING,
        allowNull: false
    },

    salt: {
        type: S.STRING
    },

    isAdmin: {
        type: S.BOOLEAN,
        defaultValue: false
    }

}, {sequelize: db, modelName: "user", timestamps: false});


User.prototype.createHash = function(plainPass, salt) {
    return bcrypt.hash(plainPass, salt)
};

User.addHook("beforeCreate", (user) => {
    return bcrypt.genSalt(16)
    .then(salt => {
        user.salt = salt;
        return user.createHash(user.password, user.salt);
    })
    .then(hash => user.password = hash)
});



module.exports = User;