'use strict'

let btnStart  = document.querySelector('#start'),
    divValue = document.querySelectorAll('[class = "result"] div[class *= "value"]'),
    inputExpenses = document.querySelectorAll('input[class = "expenses-item" ]'),
    btnApprove = document.getElementsByTagName('button')[0],
    btnApproveExpenses = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2],
    inputExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    inputIncome = document.querySelector('#income'),
    checkboxSavings = document.querySelector('#savings'),
    inputSum = document.querySelector('#sum'),
    inputPercent = document.querySelector('#percent'),
    inputYear = document.querySelector('.year-value'),
    inputMonth = document.querySelector('.month-value'),
    inputDay = document.querySelector('.day-value');
    

 document.querySelector('.title').style.fontSize = '30px';

btnApprove.disabled = true; // устанавливаем по умалчанию все кнопки кроме btnStart в неактивное положение. При на жатии на btnStart они перейдут в положение false.
btnApproveExpenses.disabled = true;
btnCalc.disabled = true;


 let time, money;

 btnStart.addEventListener('click', function(){

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == null || money == '') { // isNaN - т.к. в prompt строка преобразуется в число при помощи +
        money = +prompt("Ваш бюджет на месяц?", ""); // es одно из условий выполнится - задать вопрос снова.
    }

    appData.budget = money;
    appData.timeData = time;

    divValue[0].textContent = money.toFixed();

    inputYear.value = new Date(Date.parse(time)).getFullYear();
    inputMonth.value = new Date(Date.parse(time)).getMonth() + 1; // т.к. в JS нумерация месяцев начинается с 0. +1 используется для преобразования в "человеческий" вид.
    inputDay.value = new Date(Date.parse(time)).getDate();
    
    btnApprove.disabled = false; 
    btnApproveExpenses.disabled = false;
    btnCalc.disabled = false;


 });

    
 btnApprove.addEventListener('click', function(){
    let sum = 0;
        for( let i = 0; i < inputExpenses.length; i++) {
            let a = inputExpenses[i].value,
            b = inputExpenses[++i].value;
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&a.length < 50 ) {
                appData.expenses[a] = b;
                console.log ("done");
                sum += +b; //+b используется, что бы полученное значение из input преобразовать в число
            } else {
                i--;
            }
        divValue[3].textContent = sum;
        }
 });

 btnApproveExpenses.addEventListener('click', function(){
    
    for (let i = 0; i < inputExpensesItem.length; i++){
        
        let optExpenses = inputExpensesItem[i].value;
            appData.optionalExpenses[i] = optExpenses;          
            divValue[4].textContent += optExpenses + ' ';

            
    }
 });


 btnCalc.addEventListener('click', function(){
    
    if(appData.budget != undefined){
        let sum = divValue[3].textContent;

        appData.moneyPerDay = ((appData.budget-sum)/30).toFixed();
        divValue[1].textContent = appData.moneyPerDay;

            if ( appData.moneyPerDay < 100 ) {
            divValue[2].textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            divValue[2].textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
            divValue[2].textContent = "Высокий уровень достатка";
            } else {
            divValue[2].textContent ="Произошла ошибка";
            } 
    }else{
        divValue[1].textContent = 'Произошла ошибка. Перед началом расчёта нажмите кнопку "Начать расчёт"';
    }
   
 });

inputIncome.addEventListener('input', function(){
    
    let items = inputIncome.value;
    appData.income = items.split(',');
    divValue[5].textContent = items;

});

checkboxSavings.addEventListener('click', function(){
    if(appData.savings == false){
        appData.savings = true;
    }else{
        appData.savings = false;
    }
});


inputSum.addEventListener('input', function(){
    if(appData.savings == true) {
        let save = +inputSum.value,
            percent = +inputPercent.value;

        appData.monthIncome = save/100/12 * percent;
        appData.yearIncome = save/100 * percent;

        divValue[6].textContent = appData.monthIncome.toFixed(1);
        divValue[7].textContent = appData.yearIncome.toFixed(1);   
    }
}); 

inputPercent.addEventListener('input', function(){
    if(appData.savings == true) {
        let save = +inputSum.value,
            percent = +inputPercent.value;

        appData.monthIncome = save/100/12 * percent;
        appData.yearIncome = save/100 * percent;

        divValue[6].textContent = appData.monthIncome.toFixed(1);
        divValue[7].textContent = appData.yearIncome.toFixed(1);
    }
}); 


 let appData = {
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false,
    "budget": money,
    "timeData": time,
 };
   
   

  

