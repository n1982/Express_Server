// Подключение Express
const express = require ('express');
const app = express ();
//Создание константы
const AUTH = false;
global.auth = AUTH;
// Проверка значения auth

app.use('/index', function(req, res, next) {
    if (auth == false){
        res.redirect('http://localhost:8080/login')
    } else app.get('/index', function (req, res, next) {
        res.send("Главная страница /index");
        next;
    })
})
app.use('/about', function(req, res, next) {
    if (auth == false){
        res.redirect('http://localhost:8080/login')
    } else app.get('/about', function (req, res, next) {
        res.send("Страница описания /about");
        next;
    })
})
app.use('/settings', function(req, res, next) {
    if (auth == false){
        res.redirect('http://localhost:8080/login')
    } else app.get('/settings', function (req, res, next) {
        res.send("Страница настроек /settings");
        next;
    })
})
// Обработка параметров ссылки

// Сюда не доходит,переадресовывается по /settings
app.get('/settings/:messageId', function(req, res, next){
    // Вывод сообщения на страницу
    res.send('<h1>Страница настроек /settings</h1>' + 'Привет ' + req.params['messageId'])
    next;
});
// Пересылает сюда после app.use (/index, /settings, /about)
app.get('/login', function (req, res, next) {
    res.send('Страница входа /login');
    next;
})
//если адресов нет в списке

app.get('/*', function (req, res, next) {
    res.send('Страница 404');
})

/*
app.get('/', function (req, res){
    res.send('Страница404');
})
*/

app.listen(8080)