// Подключение Express
const express = require ('express');
const app = express ();

// Подключение body-parser
const bodyParser = require('body-parser');

//Создание константы
const auth = false;

// Подключение JSON файла
var UsDataJson = require('./db/user.json');

//Итог обработки JSON
console.log(UsDataJson);

// Получение запроса из формы
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Перенаправление файла для POST запроса
app.get('/index', function (req, res) {
    res.sendFile('D:\\Project\\Express_Server\\view\\index _V2.html');
});
// Обработка запроса
app.post('/index', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    // Проверка доступа
    UsDataJson.forEach(function(item, i, arr) {
        if (req.body.login == (item.login) && req.body.pass == (item.pass)){
            res.send('Поздравляю вы вошли!');
        }
    });
    res.send('Вход не выполнен!');
    });


// Проверка значения auth
/* app.use((req, res, next)=>{
    if (!auth && req.url != '/login'){
        res.redirect('/login');
    } else{
        next();
    }
}); */



app.get('/about', function (req, res) {
        res.send("Страница описания /about");
});
app.get('/settings', function (req, res, next) {
        res.send("Страница настроек /settings");
});

// Сюда не доходит,переадресовывается по /settings
app.get('/settings/:messageId', function(req, res, next){
    // Вывод сообщения на страницу
    res.send('<h1>Страница настроек /settings</h1>' + 'Привет ' + req.params['messageId']);
    next;
});
// Пересылает сюда после app.use (/index, /settings, /about)
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

app.listen(8080, ()=> {
    console.log('Слушается порт 8080');
});