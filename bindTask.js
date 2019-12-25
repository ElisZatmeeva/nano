
    'use strict';

let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let ageBind  = showUser.bind(age);
ageBind('Пупкин', 'Петя');
showUser();

//showUser.apply(age, ['Пупкин','Петя']); если использовать apply вызов ф-ии showUser не нужен.