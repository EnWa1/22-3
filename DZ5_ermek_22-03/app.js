//Задание №1

function reverseString(str) {
    let newString = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }
    return newString;
}
console.log(reverseString(`Здравствуйте!`));


//Задание №2

const nums = [1, 10, 8, 2, 4];
const getAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};

console.log(getAverage(nums))
