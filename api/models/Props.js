const S      = require("sequelize");
const db     = require("../config/db");

class Props extends S.Model {}

Props.init({
    nombre: {
        type: S.STRING,
        allowNull: false
    },
    direccion: {
        type: S.STRING,
        allowNull: false
    },
    descripcion: {
        type: S.STRING,
        allowNull: false
    },
    
    ubicacion: {
        type: S.STRING,
        allowNull: false
    },

    precio: {
        type: S.INTEGER
    },

    disponible: {
        type: S.BOOLEAN,
        defaultValue: false
    },

    tipo: {
        type: S.STRING,
        allowNull: false
    }

}, {sequelize: db, modelName: "props", timestamps: false});




module.exports = Props;