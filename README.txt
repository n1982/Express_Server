!Почитать type-script и vue.js 
	
	Шаг 1

1.  запустить локально вебсервер на Ноде, и в зависимости от адреса введенного в браузере показывать разные текст на страничке
 
localhost:8080/index
 
localhost:8080/about
 
localhost:8080/settings
 
	Шаг 2
	
1. предать параметр в запрос

	Шаг 3

1. Завести глобальную константу (name - auth, type - boolean)
2. Если адреса нет в пречисленных то выводить 404
3. Перед всеми запросами проверять значение (app.use) переменной auth если значение false отправлять на страничку localhost:8080/login 

 	Шаг 5
1. Создать json файлик, массив users, забей туда несколько объектов, юзеров, логины пароли
 
2. Проверку делай поиском в jsone

    Шаг 6
 1. Подключить шаблонизатор. +
 2. Подключить bootstrap +
 3. Сделать конфиг файл (для прослушивания порта) 
 4. Переделать страницу index и login

    Шаг 7
    1. Сделать сессию (посмотреть express.session + проверка )
    2. Организовать выдачу токенов (при правильной авторизации) -> https://www.npmjs.com/package/uuid
    3. При каждом гет запросе нужно проверять наличие этого токена в req, если есть: отдавать страничку
Шаг 8

1. Подключить Б (для хранения данных)
2. Сделать страницу регистрации пользователя.
3. При регистрации пользователя проводить валидациюданных






 
