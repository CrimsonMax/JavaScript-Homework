//1. Рекурсия
// Мы видели, что оператор % (остаток от деления) может
// использоваться для определения того, чётное ли число (
// % 2). А вот ещё один способ определения:
// Ноль чётный.
// Единица нечётная.
// У любого числа N чётность такая же, как у N - 2.
// Напишите рекурсивную функцию isEven согласно этим
// правилам. Она должна принимать число и возвращать
// булевское значение.
// Потестируйте её на 50 и 75. Попробуйте задать ей -1.
// Почему она ведёт себя таким образом? Можно ли её как-
// то исправить?
// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        if (n > 0) {
            return isEven(n - 2);
        } else {
            return isEven(n * -1);
        }
    }
}

console.log (isEven(-32));

// Простой вариант :)

// function isEven(n) {
//     let check = (n % 2);
//     if (check === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log (isEven(-2));