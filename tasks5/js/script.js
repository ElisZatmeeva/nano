let liMenu = document.querySelectorAll('ul>[class|= "menu"]'),
    ulMenu = document.querySelector('ul.menu'),
    liMenu5 = liMenu[3].cloneNode(true), // создаю глубокое клонирование последнего элемента
    divAdv = document.querySelector('.adv'),
    attitudeApple = prompt ('Каково Ваше отношение к марке Apple?', ''),
    promptApple = document.querySelector ('#prompt'); 
    // divTitle = document.querySelector('#title');

liMenu[2].after(liMenu[1]);

liMenu5.innerHTML = 'Пятый пункт';
liMenu5.classList.add('new');
liMenu[3].after(liMenu5);

// document.body.style.background = "none";
document.body.style.background = 'url(../img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

divAdv.remove();

promptApple.textContent = attitudeApple;



