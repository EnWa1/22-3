//Задание №1
var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var  tag = {};
tags.forEach(function(i) {
    tag[i] = (tag[i]||0) + 1;
});
console.log(tag)
var res = Object.keys(tag).sort((a, b) => {
    if (tag[a] > tag[b]){
        return -1
    } else if(tag[a] < tag[b]){
        return 1
    } else return 0

})
console.log(res)

//Задание №2

function maxCount(numbers) {
    var maxNumber = 0;
    numbers.forEach(number => {
        if (number > maxNumber){
            maxNumber = number
        }
    })
    return maxNumber
}

console.log(maxCount([1, 5, 7, 12, 32, 4]))