let sing_up_background = document.querySelector('.sing_up_background');
let sing_up_wrapper = document.querySelector('.sing_up_wrapper');
let openPopupButtonsS = document.querySelectorAll('.sing-up-btn');
let closePopupButtonS = document.querySelector('.close-popup_sing_up');
let closePopupButtonS2 = document.querySelector('.sign_in_in_sing_up');

openPopupButtonsS.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        sing_up_background.classList.add('active');
        sing_up_wrapper.classList.add('active');
    })
});

closePopupButtonS.addEventListener('click',() => {
    sing_up_background.classList.remove('active');
    sing_up_wrapper.classList.remove('active');
});
closePopupButtonS2.addEventListener('click',() => {
    sing_up_background.classList.remove('active');
    sing_up_wrapper.classList.remove('active');
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === sing_up_background) { // Если цель клика - фот, то:
        sing_up_background.classList.remove('active'); // Убираем активный класс с фона
        sing_up_wrapper.classList.remove('active'); // И с окна
    }
});

