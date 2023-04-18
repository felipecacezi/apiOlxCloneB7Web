const { CheckSchema, checkSchema } = require('express-validator')

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength: {
                options : {
                    min: 2
                }
            },
            errorMessage: 'Nome precisa ter ao menos 2 caracteres'
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password: {
            notEmpty: true,
            isLength: {
                options: {
                    min: 2
                }
            },
            errorMessage: 'Senha precisa ter ao menos 2 caractres'
        },
        state: {
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    })
}