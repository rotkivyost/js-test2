

// Напишите функцию, которая принимает массив из нескольких типов данных и будет выводить возвращать новый массив, который будет состоять только из строк, содержащих больше 5 символов.
// function myFn (arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string' && arr[i].length > 5) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr 
// }


//-------------------------------------------------------------------------------------------------------------

// Напишите функцию, которая будет принимать 3 аргумента: 1-число, 2-число, знак. Функция должна возвращать значение, полученное при операции с переданными значениями. Учитывайте вариант, что пользователь может ввести не числа, а строки, или же ввести не правильный знак. Все вариации знаков: "+", "-", "*", "/". Также учитывайте вариант, что делить на 0 нельзя! Делайте с помощью на switch, case
// function myFn (a, b, operation) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     a = +a;
//     b = +b;
//   } 
//   switch (operation) {
//     case '+': 
//       return a + b;
//     case '-': 
//       return a - b;
//     case '*':
//       return a * b;
//     case '/': 
//       if (b === 0) {
//         throw new Error('Cant divide to 0')
//       }
//       return a / b;
//     default: 
//       return new Error('Not valid operation')
//   }
// }

//-------------------------------------------------------------------------------------------------------------

// Программа 5 раз спрашивает по 2 числа, сравнивает их и выводит большее число из них в консоль. Но в конце программы, вам нужно вывести в консоль самое большое число из всех ранее введенных.
// function myFn () {
//   const res = [];
//   let maxValue = 0;
//   for (let i = 0; i < 5; i++) {
//     let firstPrompt = +prompt('Write first num');
//     let secondPrompt = +prompt('Write second num');
//     if (firstPrompt > secondPrompt) {
//       res.push(firstPrompt)
//       console.log(firstPrompt)
//     } else if (secondPrompt > firstPrompt) {
//       res.push(secondPrompt)
//       console.log(secondPrompt)
//     }
//   }
//   for (let j = 0; j < res.length; j++) {
//     if (res[j] > maxValue) {
//       maxValue = res[j]
//     }
//   }
//   console.log(maxValue)
// }

//-------------------------------------------------------------------------------------------------------------

// Найдите и выведите на экран все числа, которые делятся на 2, но не делятся на 4 в диапазоне от нуля до числа n, которое вводит пользователь. Важное уточнение: вам необходимо вывести все числа в одной переменной через конкатенацию

// function myFn (n) {
//   let res = '';
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0 && i % 4 !== 0) {
//       console.log(i)
//       res += i
//     }
//   }
//   return res
// }

// console.log(myFn(10))

//-------------------------------------------------------------------------------------------------------------

//Напишите программу, которая конвертирует 24-часовой формат времени в 12-часовой. То есть при введении пользователем 18, программа вернёт 6 p.m.  А если он введёт 9, то программа вернёт 9 a.m.

// function myFn () {
//   let usersTime = +prompt('write time')
//   let resTime;
//   if (usersTime >= 12 && usersTime <= 24) {
//     resTime = Math.floor(usersTime / 2) + ' ' + 'p.m.'
//   } else if (usersTime < 12 && usersTime >= 1) {
//     resTime = usersTime + ' ' + 'a.m.'
//   }
//   return resTime
// }

// console.log(myFn())

//-------------------------------------------------------------------------------------------------------------

// Пользователь вводит число n и дальше вводит n чисел. Найдите сумму всех этих чисел 
// function myFn () {
//   let sum = 0;
//   let usersNum = +prompt('write a num');
//   for (let i = 0; i < usersNum; i++) {
//     let newNum = +prompt('write a newNum');
//     sum = sum + newNum
//   }
//   return sum 
// }

// console.log(myFn())