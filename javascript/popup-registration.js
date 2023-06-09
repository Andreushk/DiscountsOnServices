//Скрипт открытия и закрытия popup'а для "Log In"
let log_in_background = document.querySelector('.log_in_background');
let log_in_wrapper = document.querySelector('.log_in_wrapper');
let openPopupButtons = document.querySelectorAll('.log-in-btn');
let closePopupButton = document.querySelector('.close-popup');
let closePopupButton2 = document.querySelector('.sing-up-btn');

openPopupButtons.forEach((button) => { // Когда происходит клик на кнопку с классом "log-in-btn", то:
    button.addEventListener('click', (e) => { // (обработчик, который следит за кликом на кнопку)
        e.preventDefault(); // (если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно)
        log_in_background.classList.add('active'); // ..добавляется активный класс для фона
        log_in_wrapper.classList.add('active'); // ..добавляется активный класс для окошка
    })
});

closePopupButton.addEventListener('click',() => { // Обработчик, который следит за кликом на ссылку с классом "close-popup"
    log_in_background.classList.remove('active'); // ..если ссылка нажата, то активный класс убирается с фона
    log_in_wrapper.classList.remove('active'); //..если ссылка нажата, то активный класс убирается с всплывающего окошка
});

closePopupButton2.addEventListener('click',() => { // Обработчик, который следит за кликом на ссылку с классом "sing-up-btn"
    log_in_background.classList.remove('active'); // ..если ссылка нажата, то активный класс убирается с фона
    log_in_wrapper.classList.remove('active'); //..если ссылка нажата, то активный класс убирается с всплывающего окошка
});

document.addEventListener('click', (e) => { // Обработчик на весь документ
    if(e.target === log_in_background) { // Если клик был на "фон", то:
        log_in_background.classList.remove('active'); // ..убирается активный класс с фона
        log_in_wrapper.classList.remove('active'); // ..убирается активный класс с всплывающего окошка
    }
});

//Скрипт открытия и закрытия popup'а для "Sing Up"
let sing_up_background = document.querySelector('.sing_up_background');
let sing_up_wrapper = document.querySelector('.sing_up_wrapper');
let openPopupButtonsS = document.querySelectorAll('.sing-up-btn');
let closePopupButtonS = document.querySelector('.close-popup_sing_up');
let closePopupButtonS2 = document.querySelector('.sign_in_in_sing_up');

openPopupButtonsS.forEach((button) => {  // Когда происходит клик на кнопку с классом "sing-up-btn", то:
    button.addEventListener('click', (e) => { // (обработчик, который следит за кликом на кнопку)
        e.preventDefault(); // (если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно)
        sing_up_background.classList.add('active'); // ..добавляется активный класс для фона
        sing_up_wrapper.classList.add('active'); // ..добавляется активный класс для окошка
    })
});

closePopupButtonS.addEventListener('click',() => { // Обработчик, который следит за кликом на ссылку с классом "close-popup_sing_up"
    sing_up_background.classList.remove('active'); // ..если ссылка нажата, то активный класс убирается с фона
    sing_up_wrapper.classList.remove('active'); //..если ссылка нажата, то активный класс убирается с всплывающего окошка
});

closePopupButtonS2.addEventListener('click',() => { // Обработчик, который следит за кликом на ссылку с классом "sign_in_in_sing_up"
    sing_up_background.classList.remove('active'); // ..если ссылка нажата, то активный класс убирается с фона
    sing_up_wrapper.classList.remove('active'); //..если ссылка нажата, то активный класс убирается с всплывающего окошка
});

document.addEventListener('click', (e) => { // Обработчик на весь документ
    if(e.target === sing_up_background) { // Если клик был на "фон", то:
        sing_up_background.classList.remove('active'); // ..убирается активный класс с фона
        sing_up_wrapper.classList.remove('active'); // ..убирается активный класс с всплывающего окошка
    }
});