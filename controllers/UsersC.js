const User = require('../models/UserM')
const logger = require('../services/Logger')

exports.setFirstname = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        logger.sendMessage(JSON.stringify({ phone, code }), 'info')

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}

exports.setLastname = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        logger.sendMessage(JSON.stringify({ phone, code }), 'info')

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}
exports.setCountry = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        logger.sendMessage(JSON.stringify({ phone, code }), 'info')

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}
exports.setRegion = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        logger.sendMessage(JSON.stringify({ phone, code }), 'info')

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}
exports.activateExpert = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        logger.sendMessage(JSON.stringify({ phone, code }), 'info')

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}
exports.deactivateExpert = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        logger.sendMessage(JSON.stringify({ phone, code }), 'info')

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}
