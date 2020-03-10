window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++ ) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    } // Функция начального скрытия контента

    hideTabContent(1); // Активация скрытия 

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    } // Активация контента

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});