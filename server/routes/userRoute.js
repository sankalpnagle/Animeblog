const express = require('express')
const { getAllUsers, signUp, loginController } = require('../controller/userController')

//router object
const router = express.Router()

// get all users || GET
router.get('/allusers', getAllUsers)

//Create user || POST
router.post('/signup', signUp)

//Login || POST
router.post('/login', loginController)

module.exports = router;