const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {

    getCategories: async (req, res) => {

        const cats = await prisma.categories.findMany()

        let categories = [];

        for (let i in cats) {
            categories.push({
                ...cats[i],
                img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
            })
        }



        res.json({categories})

    },
    addAction: async (req, res) => {},
    getList: async (req, res) => {},
    getItem: async (req, res) => {},
    editAction: async (req, res) => {},

}