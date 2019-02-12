// Подключение Express
const express = require ('express');
const app = express ();
// Обработка параметров ссылки
app.get('/settings/:messageId', function(request, response){
    // Вывод сообщения на страницу
    response.send('Привет ' + request.params['messageId'])
});
app.listen(8080)