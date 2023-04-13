module.exports = {
    private: async (req, res, next) => {

        res.json({ msg: 'aqio'})
        next()
    }
}