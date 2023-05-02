const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { validationResult, matchedData } = require('express-validator')
const bcrypt = require('bcrypt')

module.exports = {

    getStates: async (req, res) => {

        const states = await prisma.states.findMany()
        res.json({states})

    },
    info: async (req, res) => {

        const { token } = req.query

        const users = await prisma.users.findMany({
            where: {
                token: token
            }
        })

        const states = await prisma.states.findMany({
            where: {
                id: users[0].stateId
            }
        })

        const ads = await prisma.ads.findMany({
            where: {
                userId: users[0].id
            }
        })

        let adsList = []
        for (const ad in ads) {
           adsList.push({ ...ads[ad], category })
        }

        res.json({
            name: users[0].name,
            email: users[0].email,
            state: states[0].name,
            ads: adsList
        })

    },
    editAction: async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.json({ error : errors.mapped() })
            return
        }

        const data = matchedData(req)

        try {
            const user = await prisma.users.findMany({
                where: {
                    token: data.token
                }
            })

            if (user.length == 0) {
                res.json({ error: true })
            }

            const email = await prisma.users.findMany({
                where: {
                    email: data.email
                }
            })

            if (email.length >= 1 ) {
                res.json({ error: 'Email informado já cadastrado' })
            }

            const state = await prisma.states.findMany({
                where: {
                    id: data.stateId
                }
            })

            if (state.length == 0) {
                res.json({ error: 'O estado informado não existe' })
            }

            const updateUser = await prisma.users.updateMany({
                where: {
                    token: {
                        contains: data.token,
                    },
                },
                data: {
                    name: data.name ?? user[0].name,
                    email: data.email ?? user[0].email,
                    stateId: data.stateId ?? user[0].stateId,
                    passwordHash: await bcrypt.hash(data.password, 10) ?? user[0].passwordHash,
                },
            })

            res.json({
                msg: 'Usuario alterado com sucesso'
            })

        } catch (error) {
            res.json({ error: true})
        }

    },

}