var express = require('express');
var router = express.Router();


router.get('/index', function (req, res) {
    res.render("index", {
        title: "Страница входа /index",
        login: "Пользователь",
        userText: "Это главная страница"
    });
});
router.get('/settings', function (req, res) {
    res.render("settings", {
        title: "Страница входа",
        login: "Пользователь",
        userText: "Это страница настроек"
    });
});
router.get('/about', function (req, res) {
    res.render("about", {
        title: "Страница входа",
        login: "Пользователь",
        userText: "Эта страница расскажет о сайте"
    });
});
router.get('/login', function (req, res) {
    res.render("login", {
        title: "Страница входа",
        login: "Пользователь",
        userText: "Для входа введите имя пользователя и пароль"
    });
});
router.get('/', function (req, res) {
            res.render("login", {
            title: "Страница входа сработал /",
            login: "Пользователь",
            userText: "Для входа введите имя пользователя и пароль"
        });
});
router.get('*', function (req, res) {
    res.render("404");
});



//Подключение генератора случайных чисел
/*const uuidv1 = require('uuid/v1');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Обработка запроса
router.post('/index', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

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
});

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