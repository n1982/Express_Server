exports.get= function (req, res) {
    res.render("about", {
        title: "О сайте",
        login: "Пользователь",
        userText: "Эта страница расскажет о сайте"
    });
};