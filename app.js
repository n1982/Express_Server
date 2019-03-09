// Подключение Express
const express = require('express');
const app = express();
// Обработка параметров ссылки

const auth = false;

app.use((req, res, next) => {

    if (!auth && req.url != "/login") {
        res.redirect('/login');

    } else {
        next();
    }
});

app.get('/', function(req, res) {
    res.send("Главная страница /index");

});
app.get('/login', function(req, res) {
    res.status(200).send("ВВОД ЛОГИНА И ПАРОЛЯ ТУТ");

});
app.get('/about.ejs', function(req, res) {
    res.send("Страница описания /about.ejs");

});
app.get('/settings.ejs', function(req, res) {
    res.send("Страница настроек /settings");

});
app.get('/settings/:messageId', function(req, res) {
    res.send('<h1>Страница настроек /settings</h1>' + 'Привет ' + req.params['messageId'])
});

app.get('/404', function(req, res) { // добавил ответ для странички
    res.sendStatus(404);

});
app.get('*', function(req, res) { // Для всех остальных путей
    res.redirect('/404');
});

app.listen(8080, () => {
    console.log("Слушается порт 8080");

});
