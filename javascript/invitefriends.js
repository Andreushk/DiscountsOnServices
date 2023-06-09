//Копирует текст в буфер обмена в блоке invite friends
const a = document.getElementById("clickboardInput");
a.onclick = function() {
  document.execCommand("copy");
}
a.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", a.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});


//Есть такой вариант, но он работает только на доверенных хостингах. С его помощью можно копировать тот текст, который введен в navigator.clipboarScriptString+=Text("...")
//const a = document.getElementById("clickboardInput");
//a.onclick = (event)=> {
//  const elem = event.target;
//  navigator.clipboarScriptString+=Text("hi");
//}