var task = alert('Задание №1: Вывести возраст.')

var age = +prompt('Введите свой возраст')
if (age > 0 && age < 18 && !isNaN(age)) {
    console.log(alert('Вы ещё молоды, вам нужно учиться, вам ' + age + ' лет' ));
}else if (age > 18 && age < 50 && !isNaN(age)) {
    console.log(alert('Вы должны работать'));
}else if (age > 50 && age < 59 && !isNaN(age)) {
    console.log(alert('Вам скоро на пенсию'));
}else if (age > 59 && age < 100 && !isNaN(age)) {
    console.log(alert('Вы пенсионер'));
}else {
    console.log(isNaN(age)) + alert ('Что-то пошло не так');
}

task = alert('Задание №2: Вывести время.')

var time1 = +prompt('Введите время от 0 до 6');

switch(time1) {
    case 0:
        alert('Время 12 час ночи');
        break;
    case 1:
        alert('Время 1-ый час ночи');
        break;
    case 2: 
        alert('Время 2-ой час ночи');
        break;
    case 3: 
        alert('Время 3-ий час ночи');
        break;
    case 4: 
        alert('Время 4-ый час ночи');
        break;
    case 5: 
        alert('Время 5 часов утра');
        break;
    case 6: 
        alert('Время 6 часов утра');
        break;
    default:
        alert('Функция работает только от 0 до 6');
        break;
}

var time2 = +prompt('Введите время от 7 до 10'); 

switch(time2) {
    case 7:
        alert('Время 7 часов утра');
        break;
    case 8:
        alert('Время 8 часов утра');
        break;
    case 9: 
        alert('Время 9 часов утра');
        break;
    case 10: 
        alert('Время 10 часов утра');
        break;
    default:
        alert('Функция работает только от 7 до 10');
        break;
}

var time3 = +prompt('Введите время от 11 до 17'); 

switch(time3) {
    case 11:
        alert('Время 11 часов утра');
        break;
    case 12:
        alert('Время 12 часов утра');
        break;
    case 13: 
        alert('Время 1-ый час дня');
        break;
    case 14: 
        alert('Время 2-ой час дня');
        break;
    case 15: 
        alert('Время 3-ий час дня');
        break;
    case 16: 
        alert('Время 4-ый час дня');
        break;
    case 17: 
        alert('Время 5-ый час дня');
        break;
    default:
        alert('Функция работает только от 11 до 17');
        break;
}

var time4 = +prompt('Введите время от 18 до 23');


switch(time4) {
    case 18:
        alert('Время 6 часов вечера');
        break;
    case 19:
        alert('Время 7 часов вечера');
        break;
    case 20: 
        alert('Время 8 часов вечера');
        break;
    case 21: 
        alert('Время 9 часов вечера');
        break;
    case 22: 
        alert('Время 10 часов вечера');
        break;
    case 23: 
        alert('Время 11-ый час ночи');
        break;
    default:
        alert('Функция работает только от 18 до 23');
        break;
}

task = alert('Задание №3: Вывести среднее число!!!')

var num1 = +prompt('Введите первое число')
var num2 = +prompt('Введите второе число')
var num3 = +prompt('Введите третье число')

if ((num2 < num1 && num1 < num3) || (num3 < num1 && num1 < num2)) {
    console.log(alert('Среднее число получилось: ' + num1));
}else if ((num3 < num2 && num2 <num1) || (num1 < num2 && num2 < num3)) {
    console.log(alert('Среднее число получилось: ' + num2));
}else if ((num1 < num3 && num3 < num2) || (num2 < num3 && num3 < num1 )) {
    console.log(alert('Среднее число получилось: ' + num3));
}else {
    console.log(alert('Вы не ввели число(числа)'));
}

