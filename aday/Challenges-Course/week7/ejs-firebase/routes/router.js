const express = require('express')
const index = require('../index')

const admin = require("firebase-admin");
const database = admin.database()

function router() {
const routes = express.Router()

routes
.route('/')
.get((req, res) => {
    res.render('main')
})

routes
.route('/form')
.get((req, res) => {
    res.render('form')
})

routes
.route('/home')
.post((req, res) => {
    console.log(req.body)
    const newUser = {
        name: req.body.name,
        password: req.body.password
    }
    database.ref('user').push(newUser)
    res.send('Has sido registrado correctamente!')
})

return routes
}

module.exports = router()