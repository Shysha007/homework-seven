//let a = +prompt(`Введите число:`);
//alert( a === 0 ? `Верно` : `Неверно`);

//let a = +prompt(`Введите число:`);
//alert( a > 0 ? `Верно` : `Неверно`);

//let a = +prompt(`Введите число:`);
//alert( a < 0 ? `Верно` : `Неверно`);

//let a = +prompt(`Введите число:`);
//alert( a >= 0 ? `Верно` : `Неверно`);

//let a = +prompt(`Введите число:`);
//alert( a <= 0 ? `Верно` : `Неверно`);

//let a = +prompt(`Введите число:`);
//alert( a != 0 ? `Верно` : `Неверно`);

// let a = prompt(`Введите слово "тест" на английском:`);
// alert( a === `test` ? `Верно` : `Неверно`);

// let a = 1;
// alert( a === `1` ? `Верно` : `Неверно`); // ответ - неверно.

// let a = +prompt(`Введите число`);
// alert( a > 0 && a < 5 ? `Верно` : `Неверно`); 

//    let a = +prompt(`Введите число`);
//    if (a === 0 || a === 2) {
//     alert(a + 7);
//  } else {
//     alert(a / 10);
//  };

//    let a = +prompt(`Введите  первое число:`);
//    let b = +prompt(`Введите второе число:`);
//    if (a <= 1 && b >= 3) {
//     alert(a + b);
//  } else {
//     alert(a - 10);
//  };

// let a = +prompt(`Введите  первое число:`);
// let b = +prompt(`Введите второе число:`);
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     alert(`Верно`);
// } else {
//     alert(`Неверно`);
// }

let num = +prompt(`Введите любое число от 1 до 4`); 
let result;
switch (num) {
    case 1:
    result = `зима`;
    break;

    case 2:
    result = `весна`;
    break;

    case 3:
    result = `лето`;
    break;

    case 4:
    result = `осень`;
    break;
}
    alert( result );
