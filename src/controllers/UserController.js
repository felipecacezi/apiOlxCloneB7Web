const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {

    getStates: async (req, res) => {

        const states = await prisma.states.findMany()
        res.json({states})

    },
    info: async (req, res) => {},
    editAction: async (req, res) => {},

}