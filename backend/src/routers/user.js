const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("/users/signup", async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    try {
        const token = await user.generateAuthToken()
        await user.save();
        res.status(201).send({user,token});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/users/login",auth, async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()
            res.send({user,token})
    } catch (error) {
        res.status(404).send()
    }
})

router.post("/users/logout",auth, async(req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.status(200).send("logged out")
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/users/:id", async (req, res) => {
    const _id = req.params._id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
