var express = require('express');
var router = express.Router();

// Пост обработка


//Геттеры
router.get('/index', require('./frontpage').get);
router.get('/settings', require('./settings').get);
router.get('/about', require('./about').get);
router.get('/login', require('./login').get);

// Пост обработка
//router.post('/login', require('./login').post);



module.exports = router;