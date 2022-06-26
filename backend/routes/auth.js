const router = require('express').Router();
const Joi = require('joi');
const {User} = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post("/", async(req, res) => {
    try {
        const {error} = validate(req.body)
        if(error) {
            return res.status(400).json({message: error.message})
        }

        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return res.status(400).json({message: "Wrong email or password"})
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) {
            return res.status(400).json({message: "Wrong email or password"})
        }

        const token = jwt.sign({_id: user._id, email: user.email}, process.env.JWTPRIVATEKEY, {expiresIn: "7h"})
        res.status(201).json({token: token, message: "Signed in successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Internal Server Error"})
    }
})

const validate = (userData) => {
    const schema = Joi.object({
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    })

    return schema.validate(userData);
}

module.exports = router