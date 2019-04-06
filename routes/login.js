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



