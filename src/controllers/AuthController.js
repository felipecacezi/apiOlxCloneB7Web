const { validationResult, matchedData } = require('express-validator')

module.exports = {

    signIn: async (req, res) => {},
    signUp: async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.json({ error : errors.mapped() })
            return
        }

        res.json({
            tudoCerto: true
        })
    },

}