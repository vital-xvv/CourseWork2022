const {User} = require('../models/User.js');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post("/userinfo", async (req, res) => {
    try {
        const decoded = jwt.verify(req.body.token, process.env.JWTPRIVATEKEY, function(err, decoded) {
            if (err){
                return res.status(400).json({message: "Invalid token"})
            }else {
                return decoded
            } })

        const user = await User.findById({_id: decoded._id});

        if(!user) {
            return res.status(400).json({message: "Current user does not exist..."})
        }

        res.status(202).json({firstName: user.firstName, lastName: user.lastName});

    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;