window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';

        let info = document.querySelector('.info-header'),
            tab = document.querySelectorAll('.info-header-tab'),
            tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a){
        for( let i =a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    } 

    hideTabContent(1);
    
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        if(event.target && event.target.classList.contains('info-header-tab' )){
            for ( let i = 0; i < tab.length; i++){
                if(event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer
    
    let deadLine = '2019-12-26';

    function getTimeRemaining(endTime) {
        let time = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((time/1000)%60),
        minutes = Math.floor((time/1000/60)%60),
        hours = Math.floor((time/1000/60/60)%60);

        return {
            'total': time,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, endTime){
        let spanHours = document.querySelector(`#${id} .hours`),
        spanMinutes = document.querySelector(`#${id} .minutes`),
        spanSeconds = document.querySelector(`#${id} .seconds`),
        timeIntervalFunction = setInterval(updateInterval, 1000);

        function updateInterval(){
            let t = getTimeRemaining(endTime);
            spanHours.textContent = t.hours;
            spanMinutes.textContent = t.minutes;
            spanSeconds.textContent = t.seconds;

            if (t.hours < 10 && t.hours >= 0) {
                spanHours.textContent = "0" + t.hours;
            } 
            if (t.minutes < 10 && t.minutes >= 0) {
                spanMinutes.textContent = "0" + t.minutes;
                
            } 
            if (t.seconds < 10 && t.seconds >= 0) {
                spanSeconds.textContent = "0" + t.seconds;
            } 
            

            if(t.total <= 0) {
                clearInterval(timeIntervalFunction);
                spanHours.textContent = '00';
                spanMinutes.textContent = '00';
                spanSeconds.textContent = '00';
            }
            
        }
    }

    setClock('timer', deadLine);

    
// Modal

    let more = document.querySelectorAll('.description-btn, .more'), // для кнопок с классом description-btn и more 
    overlay =  document.querySelector('.overlay');

    more.forEach(function(item){
        item.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden'; // что бы body  не прокручиволось, когда активно всплывающее модальное окно.
        });
        document.querySelector('.popup-close').addEventListener('click', function(){
            overlay.style.display = 'none';
            this.classList.remove('more-splash');
            document.body.style.overflow = 'scroll'; //или document.body.style.overflow = '';
        });

    });

    
});


