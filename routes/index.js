var express = require('express');
var router = express.Router();

// Пост обработка

//Геттеры
router.get('/index', require('./frontpage').get);
router.get('/settings', require('./settings').get);
router.get('/about', require('./about').get);
router.get('/login', require('./login').get);
router.get('/', require('./frontpage').get);

// Отправка 404
router.get('*', require('./404').get);



//Подключение генератора случайных чисел
/*const uuidv1 = require('uuid/v1');
var urlencodedParser = bodyParser.urlencoded({ extended: false });*/

// Обработка запроса
/*router.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.render("404");

    // Проверка доступа
    if (UsDataJson.some(function (item) {
        return req.body.login == (item.login) && req.body.pass == (item.pass)
    })) {
        var uuid = uuidv1();
        console.log(uuid);
        req.session.token = uuid;
        req.session.name = req.body.login;
        console.log(req.session.token);
        console.log(req.session.id);
        res.render("login",{
            title: "Успешный вход",
            login: req.session.name,
            userText: "Вход выполнен. Ура!!!"
        });
    } else {
        res.render("index", {
            title: "Вход не выполнен!",
            login: req.session.name,
            userText: "К сожалению вход не выполнен. Ошибка в Имени пользователя, либо пароле. Попробуйте еще раз!"
        });
    };
});*/
/*
router.get('/', function (req, res) {
    if (req.session.token){
        res.render("login",{
            title: "Успешный вход",
            login: req.session.name,
            userText: "Вход выполнен. Ура!!! ,благодаря печенькам"
        });
    } else {
        res.render("index", {
            title: "Вход не выполнен!",
            login: "Пользователь",
            userText: "К сожалению вход не выполнен. Ошибка в Имени пользователя, либо пароле. Попробуйте еще раз!"
        });
    };
});

router.get('/index', function (req, res) {
    if (req.session.token){
        res.render("login",{
            title: "Успешный вход",
            login: req.session.name,
            userText: "Вход выполнен. Ура!!!"
        });
    } else {
        res.render("index", {
            title: "Вход не выполнен!",
            login: "Пользователь",
            userText: "К сожалению вход не выполнен. Ошибка в Имени пользователя, либо пароле. Попробуйте еще раз!"
        });
    };
});



router.get('/about', function (req, res) {
    if (req.session.token){
        res.render("about", {
            title: "О программе",
            login: req.session.name,
            userText: "В не далеком будущем данная страница расскажет зачем все это."
        });
    } else {
        res.render("index", {
            title: "Вход не выполнен!",
            login: "Пользователь",
            userText: "К сожалению вход не выполнен. Войдите подсвоей учетной запсью (т.к. зарегистрироваться вы не сможете :-))"
        });
    };
});
router.get('/settings', function (req, res, next) {
    if (req.session.token){
        res.render("settings", {
            title: "Настройки",
            login: req.session.name,
            userText: "В недалеком будущем данная страница расскажет, как это все настроить."
        });
    } else {
        res.render("index", {
            title: "Вход не выполнен!",
            login: "Пользователь",
            userText: "К сожалению вход не выполнен. Войдите подсвоей учетной запсью (т.к. зарегистрироваться вы не сможете :-))"
        });
    }
});

//если адресов нет в списке
router.get('*', function (req, res) {
    res.redirect('/404');
})
router.get('/404', function(req, res){
    res.sendStatus(404);
});*/
module.exports = router;