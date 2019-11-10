const express = require('express');
const router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function(req, res) {
   res.render('frontpage');
   });
// define the home page route
router.get('/index', function(req, res) {
    res.render('frontpage');
});
// перенаправление login route
router.get('/login', function(req, res) {
    res.render('login');
});
// перенаправление settings route
router.get('/settings', function(req, res) {
    res.render('settings');
});
// define the about route
router.get('/about', function(req, res) {
    res.render('about');
});

module.exports = router;
//Геттеры
 /*   app.get('/index', require('./frontpage'));
    app.get('/settings', require('./settings'));
    app.get('/about', require('./about'));
    app.get('/login', require('./login'));*/


// POST обработка
    /*app.post('/login', require('./login'));*/




