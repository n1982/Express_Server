// Подключение Express
const express = require ('express');
const app = express ();
//Создание константы
const auth = false;
// Проверка значения auth
app.use((req, res, next)=>{
    if (!auth && req.url != '/login'){
        res.redirect('/login');
    } else{
        next();
    }
});
app.get('/index', function (req, res) {
        res.send("Главная страница /index");
});

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