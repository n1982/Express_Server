exports.get= function (req, res) {
    res.render("frontpage", {
        title: "Главная страница",
        login: "Пользователь",
        userText: "Это главная страница"
    });
};