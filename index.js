// Подключение Express
const express = require ('express');
const app = express ();
// const http = require ('http');

// Подключение конфигуратора
/*const config = require ('./config/index.js');
app.set('port', config.get('port'));*/

//Настройка шаблонизатора
app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/view');
app.set('view engine', "ejs");

// Подключение body-parser
const bodyParser = require('body-parser');
// Подключение JSON файла


//Итог обработки JSON
//console.log(UsDataJson);

//подключаем файл маршрутизации
const routers = require('./routes');
app.use(routers);

//Подключаем сессию
const session = require('express-session');
app.use(session({
    secret: 'UsSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 86400000}
}));




/*//Подключение генератора случайных чисел
const uuidv1 = require('uuid/v1');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Обработка запроса
app.post('/login', urlencodedParser, function (req, res) {
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



/*// Обработка запроса
app.post('/index', urlencodedParser, function (req, res) {
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
});*/

/*app.get('/about', function (req, res) {
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
app.get('/settings', function (req, res, next) {
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
app.get('*', function (req, res) {
    res.redirect('/404');
});app.get('/404', function(req, res){
    res.sendStatus(404);
});*!/*/
// Слушаем порт
app.listen((process.env.PORT || 8080), function(){
    console.log('listening on *:8080');
});



