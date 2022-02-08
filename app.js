const express = require('express');
const { User } = require('./db');
const app = express();

app.get('/',  async(req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen('3000', () => console.log(`app is running`));
