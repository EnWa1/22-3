// задание №1
var num = 0;
do {
    console.log(num);
    num = num + 2
} while (num <= 20);

// Задание №2
var numbers = 0;
var value;
do {
    value = +prompt('Введите число:');
    if (value > 0)
    numbers += value;
}while (value >= 0)
alert(numbers)
