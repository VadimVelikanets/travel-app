const {Router} = require('express')
const config = require('config')

const Country = require('../models/country')

const router = Router()

//

router.get('/',  async (req, res) => {
    try {

        let countries = await Country.find()
        res.json(countries)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const country = await Country.findById(req.params.id)
        res.json(country)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router