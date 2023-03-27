const express = require('express')

const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController')



const Router = express.Router()


Router.get('/', notlarGetir)

Router.get('/:id', notGetir)

Router.post('/', notOlustur)

Router.delete('/:id', notSil)

Router.patch('/:id', notGuncelle)


module.exports = Router;
