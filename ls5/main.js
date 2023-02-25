//Задание №1
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const convert = (elem, target, target2, ) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(e =>{
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2)
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2)
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2)
                }
            })
            if (elem.value === '') {
                target.forEach(e => e.value = '')
            }

            elem.value === '' && (target.forEach(e => e.value = ''))
        }
    }
}
convert(som,[usd , eur])
convert(usd ,[som,eur] )
convert(eur,[som,usd])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Задание №2

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("form");

function closeModal() {
    modal.style.display = "none";
}

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    closeModal();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/data");
    xhr.send(formData);
    xhr.onload = () => {
        console.log(xhr.response);
        closeModal();
    };
});


