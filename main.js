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

    "chooseExpense": function() {
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
    },

    "detectDayBudget": function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(); // метод .toFixed() преобразует число и возвращает СТРОКОВЕ ЗНАЧЕНИЕ!
        alert( "Ваш ежедневный бюджет:" + appData.moneyPerDay );
    },

    "detectLevel": function() {
        if ( appData.moneyPerDay < 100 ) {
            console.log ( "Минимальный уровень достатка" );
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ( "Средний уровень достатка" );
        } else if (appData.moneyPerDay > 2000) {
        console.log ( "Высокий уровень достатка" );
        } else {
            console.log ("Произошла ошибка");
        }      
    },

    "checkSavings": function() {
        if (appData.savings == true) {
            let save = +prompt("Введите сумму Ваших накоплений", ""),
              percent = prompt ("Под какой процент?", "");
            appData.monthIncome = save/100/12 * percent;
            alert(`Месячный доход с Вашего депозита: ${appData.monthIncome}`);  
        }
    },

    "chooseOptExpenses": function() {
        for (let i = 1; i < 4; i++){
        
            let optExpenses = prompt ("Введите статью необязательных расходов","");
                if ( isNaN(optExpenses) === true && (typeof(optExpenses)) != null && optExpenses != '' && optExpenses.length < 50) {
                appData.optionalExpenses[i] = optExpenses;
                } else {
                    i--;
                }
        }
    },

    "chooseIncome": function() {
        let items = prompt ("Что Вам принесёт дополнительный доход? (Перечислите через запятую)", "");
        
        while ( !isNaN(items) || (typeof (items) ) === null || items === '') {
            items = prompt("Что Вам принесёт дополнительный доход? (Перечислите через запятую)", "");
            
        }

        appData.income = items.split(',');
        appData.income.push(prompt("Может что-то ещё?",""));
        appData.income.sort();

        appData.income.forEach (function(item, index){
            if ( item !== '' ) {
            alert(`Способы доп. заработка: ${index+1} ${item}`);
            }
        });
    }
};
appData.chooseIncome();   
for (let key in appData) {
    console.log (`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}

