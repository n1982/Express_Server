exports.get= function (req, res) {
    res.render("login", {
        title: "Авторизация",
        login: "Пользователь",
        userText: "Для входа введите имя пользователя и пароль"
    });
}