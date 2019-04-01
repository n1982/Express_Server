exports.get= function (req, res) {
    res.render("settings", {
        title: "Страница настроек",
        login: "Пользователь",
        userText: "Эта страница расскажет о сайте"
    });
};