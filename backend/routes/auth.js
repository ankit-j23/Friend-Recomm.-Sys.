const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult } = require('express-validator');


// Create an User using POST './api/auth/createuser' No login required
router.post('/createuser', [
    body('username', 'Please enter a valid name').isLength({ min: 5 }),
    body('password', 'Your password shoud be atleast 5 charachers long').isLength({ min: 5 })
], async (req, res) => {

    //if there are errors , then returning a bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // checking if any user with the same email exists or not if yes then return a bad request 
        let user = await User.findOne({ username: req.body.username })
        if (user) {
            return res.status(400).json({ error: "Sorry , a user with this email already exists" })
        }
        //creating a user
        user = await User.create({
            username: req.body.username,
            password: req.body.password
        })

        res.json(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured")
    }

})

module.exports = router