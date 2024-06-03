const { body } = require("express-validator");
const db = require("../database/models")

const loginValidations = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido")
        .custom(function(value){
            console.log("value: ", value);
            return db.User.findOne({
                where: { email: value }
            })
            .then(function(userToLogin){
                if(!userToLogin){
                    throw new Error("El usuario no está registrado")
                }
            })
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir una contraseña")

]

module.exports = loginValidations;