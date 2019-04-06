var UsDataJson = require('../db/user.json');
console.log(UsDataJson);

const uuidv1 = require('uuid/v1');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });



exports.get= function (req, res) {
    res.render("login", {
        title: "Авторизация",
        login: "Пользователь",
        userText: "Для входа введите имя пользователя и пароль"
    });
};



// Обработка запроса
exports.post= function (req, res,) {
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
};



