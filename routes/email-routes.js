'use strict'

const express = require('express');
const { emailView } = require('../controllers/emailController');

const router = express.Router();

router.get('/', emailView);

module.exports = {
    routes: router
}