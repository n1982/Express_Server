// Подключение Express
const express = require ('express');
const app = express ();
// Обработка параметров ссылки
app.get('/index', function (req, res, next) {
    res.send("Главная страница /index");
    next;
});
app.get('/about', function (req, res, next) {
    res.send("Страница описания /about");
    next;
});
app.get('/settings', function (req, res, next) {
    res.send("Страница настроек /settings");
    next;
});
app.get('/settings/:messageId', function(req,res){
    // Вывод сообщения на страницу
    res.send('<h1>Страница настроек /settings</h1>' + 'Привет ' + req.params['messageId'])
});
app.listen(8080)