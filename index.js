// Подключение Express
const express = require ('express');
const app = express ();

// Подключение конфигуратора
var config = require('config');
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
   // res.sendFile(__dirname + '/view/index _V2.html');
    res.render("index");
});
//Создание константы
var auth = false;

// Обработка запроса
app.post('/index', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    // Проверка доступа
        UsDataJson.forEach(function(item) {
        if (req.body.login == (item.login) && req.body.pass == (item.pass)) {
            console.log('Login: ' + item.login + ' Password: ' + item.pass);
            auth = true
            res.render("login", {
                title: "Успешный вход",
                login: item.login,
                userText: "Вход выполнен.Ура!!!",
            });
            res.end();
        };
        });
          if (auth==false) {
              res.render("login",{
                title: "Входне выполнен",
                login: "Пользователь",
                userText: "К сожалению вход не выполнен. Ошибка в Имени пользователя либо Пароле",
                });
           };
        });

app.get('/about', function (req, res) {
        res.send("Страница описания /about.ejs");
});
app.get('/settings', function (req, res, next) {
        res.send("Страница настроек /settings.ejs");
});

// Сюда не доходит,переадресовывается по /settings
app.get('/settings/:messageId', function(req, res, next){
    // Вывод сообщения на страницу
    res.send('<h1>Страница настроек /settings</h1>' + 'Привет ' + req.params['messageId']);
    next;
});
// Пересылает сюда после app.use (/index, /settings, /about.ejs)
app.get('/login', function (req, res, next) {
    res.send('Страница входа /login');
    next;
});
//если адресов нет в списке
app.get('/404', function(req, res){
    res.sendStatus(404)
});
app.get('*', function (req, res) {
    res.redirect('/404');
});

app.listen(config.get('port'), ()=> {
    console.log('Слушается порт 8080 '+  config.get('port'));
});
// Если пользователь не авторизирован
// res.send('Вход не выполнен!');

// Проверка значения auth
/* app.use((req, res, next)=>{
    if (!auth && req.url != '/login'){
        res.redirect('/login');
    } else{
        next();
    }
}); */

