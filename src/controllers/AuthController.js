const { validationResult, matchedData } = require('express-validator')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

module.exports = {

    signIn: async (req, res) => {},
    signUp: async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.json({ error : errors.mapped() })
            return
        }

        const data = matchedData(req)

        try {

            const users = await prisma.users.findMany({
                where: {
                    email: data.email
                }
            })

            if (users.length > 0) {
                res.json({
                    error: {
                        email: {
                            msg: 'E-mail já existe'
                        }
                    }
                })
                return
            }

            const state = await prisma.states.findMany({
                where: {
                    name: data.state
                }
            })

            if (state.length === 0) {
                res.json({
                    error: {
                        state: {
                            msg: 'Estado não existe'
                        }
                    }
                })
                return
            }

            const payload = (Date.now() + Math.random()).toString()
            const token = await bcrypt.hash(payload,10)

            let usuario = await prisma.users.create({
                data: {
                    name: data.name,
                    email: data.email,
                    passwordHash: await bcrypt.hash(data.password, 10),
                    token: token
                },
            })

            res.json({ token })

        } catch (error) {
            console.log(error)
            return

            res.json({
                error: true
            })
        }

    },

}