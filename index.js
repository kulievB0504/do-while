let trial = 0;
let password = "7777";

do {
  trial++; if (trial === 1) {
    alert("Попытка номер 1. Введите пароль:");
  } else {
    alert(`Попытка номер ${trial}. Введите пароль:`);
  }
  
  let uzer = prompt("Введите пароль:");
  
  if (uzer === password) {
    alert("Вход разрешен!");
    break;
  }
} while (trial < 4);

if (trial === 4) {
  alert("Ошибка: вход не допущен");
}