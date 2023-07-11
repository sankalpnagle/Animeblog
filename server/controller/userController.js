const userModel = require('../models/userModel')
//create user
exports.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //validation
        if (!name || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "please fill the filed"
            })
        }
        //existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: 'user already exists'
            })
        }
        //save new user
        const user = new userModel({ name, email, password })
        await user.save()
        return res.status(201).send({
            success: true,
            message: 'new user created',
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'error in signup callback',
            success: false,
            error
        })
    }
};


//get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            usercount: users.length,
            success: true,
            message: 'all users data',
            users
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in get all users',
            error
        })

    }
};


//Login
exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: "Please provide email or password",
            });
        }
        const users = await userModel.findOne({ email });
        if (!users) {
            return res.status(200).send({
                success: false,
                message: "email is not registerd",
            });
        }
        return res.status(200).send({
            success: true,
            messgae: "login successfully",
            users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in login callback',
            error
        })

    }

};


