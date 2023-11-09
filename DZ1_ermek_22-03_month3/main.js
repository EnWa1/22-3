//задание №1

//Получаем инпут для ввода ИНН
const innInput = document.querySelector('#innInput')

//Получаем кнопку для проверки ИНН
const innCheck = document.querySelector('#innCheck')

//Получаем поле для вывода результата
const innResult = document.querySelector('.innResult')

//Переменная где хранится регулярное выражение для проверки ИНН
const regExp = /^[12]\d{13}$/

// стрелочная анонимная функция которая срабатывает при нажатии на кнопку 
innCheck.onclick = () => {
    //при помощи .test сопоставляем наш введеный ИНН с регулярным выражением
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'CORRECT INN'
        innResult.style.color = 'green'
    }else{
        innResult.innerHTML = 'WRONG INN'
        innResult.style.color = 'red'
    }

}

//Задание №2

// изначальное положение равно нулю
let position = 0;

//создаем функцию
function moveBox() {
    //достаем наш квадрат и сохраняем его 
    let box = document.querySelector('.box');
    //устанавливаем значение свойства CSS left элемента box в позицию, указанную переменной position (в пикселях)
    box.style.left = `${position}px`;
    //инкремент(счетчик прибавления)
    position++;
    //условие если позиция нашего квадрата больше чем ширина большого квадрата, то идет зацикливание анимации
    if (position < 451) {
        requestAnimationFrame(moveBox);
    }
}
moveBox()
