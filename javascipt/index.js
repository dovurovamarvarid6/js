/// ================ Output
// alert('Hello world');
// document.write('<h1 style="color: red;">This is document write</h1>');
// console.log('This is console');
// console.error('asd');

// ==================== Variables
// var word = 'Hello world'
// var ketmon = "lapatka"

// var a = 5
// var b = 1

// a = 6
// a = 7

// var b = 8

// b = 1

// var res = a / b

// console.log(res);

// var word1 = 'Hello'
// var word2 = 'world'
// var space = ' '

// console.log('Hello' + ' ' + word2);

/// ========= operators + - * / %
// var a = 4
// var b = 5
// var c = a % b 
// console.log(c);

// ===================== Increment Decrement
// var x = 4
// x = x + 1
// x += 1
// x++ // 5
// x++ // 6 
// x++ // 7
// ++x // 5
// ++x // 6
// console.log(x++); // 4  // x = x + 1
// console.log(x); // 5 
// console.log(++x);  // 1 + x = x

// var y = 8 
// // y--
// // --y
// console.log(--y);

/* =================== Data type */
/* 
 nechta data type bor?
 o'zgaruvchiga solib ishlatish
*/

/* 
string "" // '' // ``
number 1254545454 6.52
object
NaN  // Not a Number
undefined
Symbol
null
boolean true false
*/

/* ====================== string number */

// var word1 = 'Hello45asda564d56as4d65'
// var word2 = 'World'

// var number = 545456454654654654564
// var numStr = '4'

// console.log(number + number + number + number + '');
// console.log(typeof (3 + 45 + ''));

/* ========================== boolean */
// var bool = true
// var bool2 = false

// console.log(typeof bool2);

/* var x = 'a'
console.log(x++); */

// var b
// console.log(b); // undefined
// console.log(c); // 

// var space = null
// console.log(typeof space);

// console.log(typeof ('' + true));

/* =========================== operator > <  >= <= == === != !==*/
// var b = 4
// var c = 5

// // console.log(b > c);  // boolean

// var a = 9

// // console.log(a >= b >= c);

// b = a

// console.log(b == a);

// var b = 4
// var c = 5
// console.log(b === c);

// var b = 3
// var a = '3'

// console.log(b == a); // type less
// console.log(b === a); // type +

// console.log(a != b);   3 != '3'
// console.log(a !== b);  3 !== '3'

/* ==================== operator && || ! */
// var bool = false
// // var bool2 = bool

// console.log(!!!!!bool);

/// ============== or ||
// var bool1 = true
// var bool2 = false

// console.log(false || false || false || true || true); // 0 + 0 + 0 + 0 + 1

/* =============== and && */
// var bool1 = true
// var bool2 = false

// console.log(true && true && true); // false // 1 * 245646547 * 1 * 7 * 0

// ( 3 - 4 >= 1 || false && true)
// false
// ( !!!!true || false && true && 3 === '3')
// true

/* ===================== input */
// var a = +prompt('1 chi sonni kiriting: ') // null
// var b = +prompt('2 chi sonni kiriting: ') // '22'

// // +'-5'
// // -5

// // -'-5'
// // 5

// var res = a * b
// console.log(res);
// console.log(typeof res);
/* ===================== `` tilda */
// var a = 'World'

// var str = `Hello      ${a}`
// console.log(str);

// ================== if else 
// var tom = 8
// var jack = 90

// if(!!54545){
//     console.log('Tom jackdan katta');
// }else{
//     console.log('Jack tomdan katta');
// }

// var a = 5
// var oper = "/"
// var b = 8

// console.log(eval(a + oper + b));

//////////////// 

// var date = +prompt('Bugungi sanani yozing')

// if(date <= 7){
//     console.log('Oyliklar chiqmoqda');
// }else if(date <= 31 && date > 25){
//     console.log('Kaput');
// }else if(date > 31){
//     console.log('31 dan katta sana yoq bizda');
// }else{
//     console.log('Oylik hali chiqmadi');
// }

/* ====================================== */
// var num1 = +prompt('Birinchi sonni qo\'ying'); // '12'
// var math = prompt('Amal kirgazing'); // *
// var num2 = +prompt('Ikkinchi sonni kiriting'); // 3

// var res = null

//#1
// var res = eval(num1 + math + num2)
// document.write(`${num1} ${math} ${num2} = ${res}`)

//#2
// if(math === '/'){
//     if(num2 === 0){
//         document.write('Maxraj nol bo`lishi mumkin emas')
//     }
//     res = num1 / num2 
// }else if(math === '*'){
//     res = num1 * num2
// }else if(math === '+'){
//     res = num1 + num2
// }else if(math === '-'){
//     res = num1 - num2
// }else if(math === '%'){
//     res = num1 % num2
// }else{
//     document.write('Siz kiritgan amal mavjud emas: ' + math)
// }

// document.write(`${num1} ${math} ${num2} = ${res}`)

// var num1 = +prompt('Birinchi sonni qo\'ying'); // '12'
// var math = prompt('Amal kirgazing'); // *
// var num2 = +prompt('Ikkinchi sonni kiriting'); // 3

// var res = null
// //#3
// switch(math){
//     case '/':
//         if(num2 === 0){
//                 document.write('Maxraj nol bo`lishi mumkin emas')
//         }
//         res = num1 / num2
//         break
//     case '*':
//         res = num1 * num2
//         break
//     case '-':
//         res = num1 - num2
//         break
//     case '+':
//         res = num1 + num2
//         break
//     case '%':
//         res = num1 % num2
//         break
//     default:
//         document.write('Siz kiritgan amal mavjud emas: ' + math + ';')
// }

// document.write(`${num1} ${math} ${num2} = ${res}`)

/* =============== switch case */
// var weekDay = prompt('Hafta kunini kirgazing: ')

// switch(weekDay){
//     case "Dush":
//     case "Sesh": 
//     case "Chor":
//     case "Pay":
//     case "Juma":
//         console.log('Ish kuni');
//         break  
//     case "Shan":
//     case "Yak":
//         console.log('Dam olish kuni');
//         break  
//     default: 
//         console.log('Bunaqa hafta kuni yo\'q');
// }

// ================ function

// function sayHello(){
//     var ovoz = 'asd'
//     return ovoz
// }

// var a = sayHello()
// console.log(a);
// var a = 'Privet'

// function noname(){
    //   console.log(a); 
    //   var a = 'Hello'
// }

// // console.log(a); // privet
// noname()

// var firstName = 'Harry'

// function sayHello(arg){
//     console.log(`Hello ${arg}`);
// }

// sayHello('Jack')

// var a = 4
// var b = 9

// function sum(x, y){
//     return x + y
// }

// var res = sum(a, b)
// console.log(res);