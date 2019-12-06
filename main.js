"use strict"

let time, money;

function start() {
 money = +prompt("Ваш бюджет на месяц?", "");
 time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == null || money == '') { // isNaN - т.к. в prompt строка преобразуется в число при помощи +
        money = +prompt("Ваш бюджет на месяц?", ""); // es одно из условий выполнится - задать вопрос снова.
    }
}

start();

let appData = {
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": true,
    "budget": money,
    "timeData": time,
};

function chooseExpenses()  {
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
}
chooseExpenses();

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


function detectDayBudget() {
 appData.moneyPerDay = (appData.budget/30).toFixed(); // метод .toFixed() преобразует число и возвращает СТРОКОВЕ ЗНАЧЕНИЕ!

 alert( "Ваш ежедневный бюджет:" + appData.moneyPerDay );
}
detectDayBudget();

function detectLevel() {
    if ( appData.moneyPerDay < 100 ) {
        console.log ( "Минимальный уровень достатка" );
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ( "Средний уровень достатка" )
    } else if (appData.moneyPerDay > 2000) {
    console.log ( "Высокий уровень достатка" )
    } else {
        console.log ("Произошла ошибка")
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Введите сумму Ваших накоплений", ""),
          percent = prompt ("Под какой процент?", "");
        appData.monthIncome = save/100/12 * percent;
        alert(`Месячный доход с Вашего депозита: ${appData.monthIncome}`);  
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++){
        
        let optExpenses = prompt ("Введите статью необязательных расходов","");
            if ( isNaN(optExpenses) === true && (typeof(optExpenses)) != null && optExpenses != '' && optExpenses.length < 50) {
                appData.optionalExpenses[i] = optExpenses;
            } else {
                i--;
            }
        
        }
    }

chooseOptExpenses();
