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

let position = 0;
  function moveBlock() {
    let smallBlock = document.getElementById("small-block");
    smallBlock.style.left = `${position}px`;
    position++;
    if (position < 200) {
      requestAnimationFrame(moveBlock);
    }
  }
  moveBlock();
