//Отвечает за переключение цен при выборе количества месяцев.
var tab_btn_1 = document.getElementById('tab_btn_1'),
tab_btn_2 = document.getElementById('tab_btn_2'),
price_6 = document.querySelectorAll('.price_6'),
price_12 = document.querySelectorAll('.price_12'),
    input = document.querySelectorAll('input');
for (var i=0; i<input.length; i++) {
  input[i].onchange = function() {
    if (tab_btn_1.checked) {
      for (var a= 0; a < price_6.length; a++) {
         price_6[a].style.display = 'block';
      }
      for (var a = 0; a < price_12.length; a++) {
         price_12[a].style.display = 'none';
      }
    } else if (tab_btn_2.checked) {
      for (var b = 0; b < price_6.length; b++) {
        price_6[b].style.display = 'none';
      }
      for (var b = 0; b < price_12.length; b++) {
        price_12[b].style.display = 'block';
      }
    };
  };
};

