"use strict"

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false,
    "budget": money,
    "timeData": time,
};

for( let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    b = +prompt ("Во сколько обойдется?", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&a.length < 50 ) {
        appData.expenses[a] = b;
        console.log ("done");
    } else {
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//     b = +prompt ("Во сколько обойдется?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' && a.length < 50 ) {
//         appData.expenses[a] = b;
//         console.log ("done");
//     } else {
//        i--;
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//     b = +prompt ("Во сколько обойдется?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null && a != '' && b != '' && a.length < 50 ) {
//         appData.expenses[a] = b;
//         console.log ("done");
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);



appData.moneyPerDay = appData.budget/30;

alert( "Ваш ежедневный бюджет:" + appData.moneyPerDay );

if ( appData.moneyPerDay < 100 ) {
    console.log ( "Минимальный уровень достатка" );
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ( "Средний уровень достатка" )
} else if (appData.moneyPerDay > 2000) {
   console.log ( "Высокий уровень достатка" )
} else {
    console.log ("Произошла ошибка")
}
