//Задание №1
let operation;
function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerHTML = result;
}

//Задание №2
const riddle1Button = document.getElementById("riddle1-button");
const riddle1Answer = document.getElementById("riddle1-answer");

riddle1Button.addEventListener("click", function() {
    riddle1Answer.classList.toggle("visible");
    if (riddle1Button.innerHTML === "Show Answer") {
        riddle1Button.innerHTML = "Hide Answer";
    } else {
        riddle1Button.innerHTML = "Show Answer";
    }
});

