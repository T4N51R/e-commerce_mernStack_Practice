const express = require('express');
const { seedUser } = require('../Controller/seedUser');
const seedRouter = express.Router();

seedRouter.get('/users',seedUser);

module.exports = seedRouter