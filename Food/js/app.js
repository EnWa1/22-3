const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

let tabCounter = 0 // переменная для отслеживания текущего таба

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

const switchTab = () => {
    hideTabContent()
    showTabContent(tabCounter)
    tabCounter++
    if (tabCounter >= tabs.length) {
        tabCounter = 0
    }
}

// Запускаем переключение табов с интервалом в 2 секунды
setInterval(switchTab, 2000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
                tabCounter = i
            }
        })
    }
}

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');
const newModalTrigger = document.querySelector('.btn_dark');

const openModal = () => {
    setTimeout(() => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }, 100); // Set a delay of 500ms (0.5 seconds)
};


const closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => openModal();
newModalTrigger.onclick = () => openModal();
closeModalBtn.onclick = () => closeModal();

modal.onclick = (event) => (event.target === modal ? closeModal() : false);
modal.onkeydown = (event) =>
    event.code === 'Escape' ? closeModal() : false;

window.addEventListener('scroll', () => {
    const contentHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= contentHeight) {
        openModal();
    }
});

// data


const deadline = '2023-02-17'


function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date(),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element),
        days = elem.querySelector('#days'),
        hours = elem.querySelector('#hours'),
        minutes = elem.querySelector('#minutes'),
        seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML = makeZero(time.days)
        hours.innerHTML = makeZero(time.hours)
        minutes.innerHTML = makeZero(time.minutes)
        seconds.innerHTML = makeZero(time.seconds)
    }

    function makeZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

}

setClock('.timer', deadline)
