const express = require('express');
const router = express.Router();

const { index } = require('../controllers/index')
// console.log(index)

/* GET home page. */
router.get('/', index);

module.exports = router;
