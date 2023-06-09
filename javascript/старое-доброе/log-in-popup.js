let log_in_background = document.querySelector('.log_in_background');
let log_in_wrapper = document.querySelector('.log_in_wrapper');
let openPopupButtons = document.querySelectorAll('.log-in-btn');
let closePopupButton = document.querySelector('.close-popup');
let closePopupButton2 = document.querySelector('.sing-up-btn');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        log_in_background.classList.add('active');
        log_in_wrapper.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    log_in_background.classList.remove('active');
    log_in_wrapper.classList.remove('active');
});

closePopupButton2.addEventListener('click',() => {
    log_in_background.classList.remove('active');
    log_in_wrapper.classList.remove('active');
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === log_in_background) { // Если цель клика - фот, то:
        log_in_background.classList.remove('active'); // Убираем активный класс с фона
        log_in_wrapper.classList.remove('active'); // И с окна
    }
});

document.addEventListener('click', (e) => {
    if(e.target === log_in_background) {
        log_in_background.classList.remove('active');
        log_in_wrapper.classList.remove('active');
    }
});