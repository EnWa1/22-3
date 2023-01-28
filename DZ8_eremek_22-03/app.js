function toggleAnswer(riddleNumber) {
    let button = document.getElementById("button" + riddleNumber);
    let answer = document.getElementById("answer" + riddleNumber);
    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.innerHTML = "Hide Answer";
    } else {
        answer.style.display = "none";
        button.innerHTML = "Show Answer";
    }
}
document.getElementById("answer1").innerHTML = "паровоз";
document.getElementById("answer2").innerHTML = "ромашка";
document.getElementById("answer3").innerHTML = "сосна";
document.getElementById("answer4").innerHTML = "ёлки";
document.getElementById("answer5").innerHTML = "яблоня";
document.getElementById("answer6").innerHTML = "ландыши";



