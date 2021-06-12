//function declaration
function som1 (
    number1,
    number2,
){
const squared1 = (number1 * number1) + (number2 * number2);
const squared2 = squared1 * squared1;
return squared2
}

console.log (som1(3,9));


//function expression
const som2 = function (
    number1,
    number2,
){
    const squared1 = (number1 * number1) + (number2 * number2);
    const squared2 = squared1 * squared1;
    return squared2
}

console.log (som2(3,9));

//arrow function 



const som3 = (number1, number2) => {
    const squared1 = (number1 * number1) + (number2 * number2);
    const squared2 = squared1 * squared1;
    return squared2
}

console.log (som3(3,9));