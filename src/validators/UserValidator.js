const { CheckSchema, checkSchema } = require('express-validator')

module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            isLength: {
                options : {
                    min: 2
                }
            },
            errorMessage: 'Nome precisa ter ao menos 2 caracteres'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password: {
            optional: true,
            notEmpty: true,
            isLength: {
                options: {
                    min: 2
                }
            },
            errorMessage: 'Senha precisa ter ao menos 2 caractres'
        },
        stateId: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    }),
}