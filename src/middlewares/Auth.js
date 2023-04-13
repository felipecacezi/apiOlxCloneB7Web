const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    private: async (req, res, next) => {

        let token = req.query.token ?? req.body.token

        if (
            !token
            || token == ''
        ) {
            res.json({ notAllowed: true })
            return
        }

        try {

            const getUser = await prisma.users.findMany({
                where: { token },
            })

            if (getUser.length === 0) {
                res.json({ notAllowed: true })
                return
            }

            next()

        } catch (error) {
            res.json({ notAllowed: true })
            return
        }


    }
}