let btnStart  = document.querySelector('#start'),
    btnValue = document.querySelectorAll('[class = "result"] div[class *= "value"] '),
    inputExpenses = document.querySelectorAll('input[class = "expenses-item" ]'),
    btnApprove = document.getElementsByTagName('button')[0],
    btnApproveExpenses = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2],
    inputExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    inputIncome = document.querySelector('#income'),
    inputCheckbox = document.querySelector('#savings'),
    inputSum = document.querySelector('#sum'),
    inputPercent = document.querySelector('#percent'),
    inputYear = document.querySelector('.year-value'),
    inputMonth = document.querySelector('.month-value'),
    inputDay = document.querySelector('.day-value');


console.log(btnValue); 
console.log(inputExpenses);    
console.log(btnApprove); 
console.log(btnApproveExpenses);
console.log(btnCalc); 
console.log(inputExpensesItem); 
console.log(inputIncome); 
console.log(inputCheckbox); 
console.log(inputSum); 
console.log(inputPercent); 
console.log(inputYear); 
console.log(inputMonth); 
console.log(inputDay); 

// .title    font-size: 20px;
 
 document.querySelector('.title').style.fontSize = '50px';