// // //Задание №1
const buton = document.querySelectorAll(".btn");
for (let i = 0; i < buton.length; i++) {
    buton[i].addEventListener("click", function() {
        console.log('вы нажали на кнопку')
    });
}
//////////////////////
// //2 вариант решения
// let button = document.querySelectorAll(".btn");
// button.forEach(btn => {
//     btn.addEventListener('click', function (){
//         console.log('вы нажали на кнопку')
//     });
// });
/////////////////////////
//Задание №2
const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;
            if (direction === 'plus') {
                newValue = currentValue + 1;
            } else if (direction === 'minus'){
                newValue = currentValue -1;
            }
            inp.value = newValue;
        })
    })
}
counter();