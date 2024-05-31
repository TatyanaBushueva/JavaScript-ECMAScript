/*Задание 1
    Реализуйте функцию getUserDa a, которая принимает идентификатор пользователя (ID) в
    качестве аргумента и использует fe ch для получения данных о пользователе с заданным
    ID с удаленного сервера. Функция должна возвращать промис, который разрешается с
    данными о пользователе в виде объекта. Если пользователь с указанным ID не найден,
    промис должен быть отклонен с соответствующим сообщением об ошибке.
*/

const getUserData = (id) =>
  fetch(`https://api.server.com/${id}`) //указанный адрес - ссылка на api для запроса
    .then((res) => res.json())
    .catch((e) => {
      console.log(e.message);
    }); //функция в случае удачного выполнения возвращает json с информацией о пользователе
let userData = getUserData(1);
console.log(userData);

/*Задание 2
    Реализуйте функцию saveUserDa a, которая принимает объект с данными о пользователе в
    качестве аргумента и использует fe ch для отправки этих данных на удаленный сервер для
    сохранения. Функция должна возвращать промис, который разрешается, если данные
    успешно отправлены, или отклоняется в случае ошибки.
*/
const user = {
  id: 1,
  age: 30,
  name: "John",
  email: "john@example.com (mail o:john@example.com)",
};
const saveUserData = (userData) =>
  fetch("https://api.server.com/users", {
    method: "post", //метод post
    body: JSON.stringify({ ...userData }), //само тело запроса
    headers: {
      "content-type": "application/json", //заголовки
    },
  })
    .then(() => console.log("Данные успешно отправлены"))
    .catch((e) => console.log(e.message));
saveUserData(user);

/*Задание 3
      Напишите функцию changeS yleDelayed, которая принимает идентификатор элемента и
    время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить
    стиль элемента через указанное время.
*/

const changeStyleDelayed = (id, timer) => {
  setTimeout(() => {
    document.getElementById(id).style.color = "red";
  }, timer);
};
//в html-документе объявлен заголовок h1 с id 'text'
changeStyleDelayed("text", 5000); //через 5 секунд заголовок сменит цвет на красный
