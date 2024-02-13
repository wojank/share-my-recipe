const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/userControllers');

router.get('/', getUser);

module.exports = router;
