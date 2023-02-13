//Задание №1
const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY <= 449) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 449) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()

//Задание №2
const number = document.querySelector('#number')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')

let interval
let count = 0

const start = () => {
    interval = setInterval(() => {
        count++
        number.innerHTML = count
    }, 1000)
}

const stop = () => {
    clearInterval(interval)
}

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
