const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post('/create', async(req, res, next) => {
    const data = {
        username: req.body.username
    }
    console.log(data)
try {
    const userData = await user.create(data);

    return res.status(200).send({
        success: true,
        message: userData
    })
} catch(error) {
    return res.status(400).send({
        success: false,
        message: error
    })
}

})

router.get('/all', async (req, res, next) => {
    try {
        const userData = await user.find({});

        return res.status(200).send({
            success: true,
            message: userData
        })
    } catch (err) {
        return res.status(200).send({
            success: false,
            message: err
        })
    }
})

module.exports = router