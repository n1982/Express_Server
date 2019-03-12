// Подключение Express
const express = require ('express');
const app = express ();

// Подключение конфигуратора
const config = require ('./config/index.js');
app.set('port', config.get('port'));

// Подключение модуля для работы с файлами
const fs = require ('fs');

//Настройка шаблонизатора
app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/view');
app.set('view engine', "ejs");

// Подключение body-parser
const bodyParser = require('body-parser');



// Подключение JSON файла
var UsDataJson = require('./db/user.json');

//Итог обработки JSON
console.log(UsDataJson);

// Получение запроса из формы
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Перенаправление файла для POST запроса
app.get('/index', function (req, res) {
      res.render("index", {
        title: "Страница входа!",
        login: "Пользователь",
        userText: "Введите Имя пользователяи пароль!"
    });
});

// Обработка запроса
app.post('/index', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    // Проверка доступа
    if (UsDataJson.some(function (item) {
        return req.body.login == (item.login) && req.body.pass == (item.pass)
    })) {
        res.render("login",{
            title: "Успешный вход",
            login: req.body.login,
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

app.get('/about', function (req, res) {
    res.render("about", {
        title: "О программе",
        login: "Пользователь",
        userText: "В не далеком будущем данная страница расскажет зачем все это."
    });
});
app.get('/settings', function (req, res, next) {
    res.render("settings", {
        title: "Настройки",
        login: "Пользователь",
        userText: "В недалеком будущем даннаястраница расскажет как это все настроить."
    });
});

//если адресов нет в списке
app.get('*', function (req, res) {
    res.redirect('/404');
});
app.get('/404', function(req, res){
    res.sendStatus(404)
});

// Слушаем порт
app.listen(config.get('port'), ()=> {
    console.log('Слушается порт '+  config.get('port'));
});


