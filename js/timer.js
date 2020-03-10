window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let deadline = '2020-03-12';   // Конец таймера

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()), // Разница между текущей датой и конечной
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));  // Вычисление часов минут секунд
        
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds // Возврат результата вызывающей функции
        };
    }
        
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),   // Определение блоков в документе
            timeInterval = setInterval(updateClock, 1000); // Запуск обновления каждую секунду

        function updateClock() {
            let t = getTimeRemaining(endTime); //Получает результаты из endTime
            
            function addZero(num) { // Добавление нуля если значение меньше или равно 9
                if (num <= 9) {
                    return '0' + num;
                } else return num; 
            }

            hours.textContent = addZero(t.hours); // Передает полученные данные в документ
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if (t.total <= 0) {  // Остановка таймера если время прошло
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline); // Старт кода
});