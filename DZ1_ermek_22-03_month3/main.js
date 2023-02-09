//задание №1

const innInput = document.querySelector('#innInput')
const innCheck = document.querySelector('#innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^[12]\d{13}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'CORRECT INN'
        innResult.style.color = 'green'
    }else{
        innResult.innerHTML = 'WRONG INN'
        innResult.style.color = 'red'
    }

}

//Задание №2

let left = 0;
function moveBox() {
    const box = document.querySelector('.box');
    box.style.left = `${left}px`;
    left += 1;
    if (left < 450) {
        setTimeout(moveBox, 10);
    }
}

moveBox()

