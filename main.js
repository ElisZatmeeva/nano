"use strict"

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let propertyOne = prompt("Введите обязательную статью расходов в этом месяце", "");
let sumOne = +prompt("Во сколько обойдется?", "");

let propertyTwo = prompt("Введите обязательную статью расходов в этом месяце", "");
let sumnTwo = +prompt("Во сколько обойдется?", "");

let appData = {
    "expenses": {
        [propertyOne]: sumOne,
        [propertyTwo]: sumnTwo,

    },
    "optionalExpenses": {},
    "income": [],
    "savings": false,
    "budget": money,
    "timeData": time,
};

let messange = money/30;
alert( "Ваш бюджет на день:" + messange );

