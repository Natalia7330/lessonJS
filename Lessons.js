// for (начало, условие, шаг){
    // тело цикл}
// 
// for (i = 0; i < 3; i++){
//     console.log(i);
// }
// let str = "Hello";
// let newStr = "";
// for (let i = 1; i <= 7; i++){
//     newStr = newStr + str;
//     console.log(newStr);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum = sum + i;
//     console.log(sum);
// }

// let num = 5;
// let result = 1;
// for (let i = 1; i <= 3; i++){
//     result = result * num;
//     console.log(result);   
// }



// const arr = ["one", 2, underfined];
// console.log = (arr);
// // console.log(arr.length);
// // console.log(arr[1]);

// let str = "Task";
// let x = 1;
// console.log(str + " " + x++);

// // / Заполнить массив числами от 0 до 20 включительно, за исключением чисел,     кратных 5 (using continue)
// const arr = [];
// let y = 0;
// for (i = 0; i <= 20; i++){
//     if (i % 5 !== 0){
//         arr [y] = i;
//         y++;

// }
// }

//     console.log(arr)





// console.log("___________________________");

// let arr1 = [1, 5, 28, null, "apple", undefined];
// let index = 0;
// while (index < arr1.length){
//     console.log(arr1[index]);
//     index++
// }


// function sum(a,b){
//     return a * b
// }

// console.log(sum(1,5))

// let name = "Anna";
// let greet = "Hi";

// function showMessage(name1){
//     return name;
// }
// console.log(showMessage());

// function showHi(){
//     return "Hi"
// }
// function showName(name){
//     return name
// }
// function showMessage2(myName){
//     return showHi() + " " + showName (myName)
// }
// console.log(showMessage2("Olga"))


// let hello = function (name){
//     console.log("Hi," + name)
// }
// hello ("Natalia");

// let sum3 = (a,b) => a + b;
// console.log(sum3(3,9))

// function print(){
//     console.log("Hello World!")
// }
// print();

// const print = function (){
//     console.log("Good night World")

// }
// print();


// function checkEven(num){
//     return(num % 2 ? false : true);
// } 
// let arr = [1, 2, 5, 8, 9];

// for (let i = 0; i < arr.length; i++){
//     console.log(checkEven(arr[i]))
// }

// function count(){
//     let num = 10;
//     num++
//     console.log(num);
// }

// count();
// count();
// count();

// function sum(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(10,20));

// function count (num1, num2, operator){
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 -num2;
//             break;

//     }
   
// }
// console.log(count(10,20, "-"));

// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// let arr = [10, 20, 30, 40, 50, 60];
// let result = sum(...arr);
// console.log(result);

// function sum (num1, num2) {
//     return num1 + num2;
// }
// const newSum = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(sum(10,20));
// console.log(newSum(10,20));

// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
// // var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// //  const pets = ['cat', 'dog', 'bat'];
//  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];



// function arrLongest (arr) {
//     let longest = arr[0].length;
//     let num = 0;
//        for (let i = 0; i <= arr.length-1; i++) {
//            if (longest < arr[i].length) {
//                longest = arr[i].length
//                num = i;
//            } 
         
//        }
//        return num;
//     } 
   
//     console.log(arrLongest(words));
 
// function sum(num1, num2){
//     return function(){
//         return num1 +num2
//     }
// }
// const newSum = sum(10, 20);
// console.log(newSum);
// console.log(newSum());

// 


// let string = "Hello World";
// console.log(string);

// console.log(string.split(" "));
// console.log(string);

// let array = ["a", "b", "c", 1, 2, 3];
// console.log(array);

// console.log(array.join());
// console.log(array);

// let newStringFromArray = array.join("/   ");
// console.log(newStringFromArray)

// const letters = ['a', 'b', 'c', 'd', 'e'];
// letters.push(letters);
// letters.push('f',1);
// letters.push(88)
// console.log(letters);

// letters.pop();
// let a = letters.pop();
// console.log(a)

// const bigLetters = ['A', 'B', 'C', 'D', 'E'];
// bigLetters.unshift('Z');
// let d =bigLetters.unshift('X', 'Y');
// console.log(bigLetters);
// console.log(d)

// let b = bigLetters.shift();
// console.log(bigLetters);
// console.log(b);

// const letters = ['a', 'b', 'c', 'd', 'e'];
// const bigLetters = ['A', 'B', 'C', 'D', 'E'];
// console.log(String(7));
// let num = String(7);
// let num2 = 5;
// console.log(num + num2)

// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];
// arr1.push(arr2, 5)
// console.log(arr1)

// arr1.push(...arr2);
// console.log(arr1);

// const arr3 = [...arr1, ...arr2];
// console.log(arr3)

// const numbers = [4, 8, 99, 9, 777, 54];
// console.log(numbers);
// console.log(...numbers)

// console.log(Math.max(4, 8, 99, 9));

// const arr = [1, 2];
// const arr1 = arr;
// console.log(arr === arr1);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const str = 'a';
// const strObj = new String('a');

// const a1 = [1, 2, 3];
// const b1 = [1, 2, 3];
// let a2 = a1.join();
// let b2 = b1.join();

// console.log(JSON.stringify(a1) == JSON.stringify(b1))

// let emptyArr = [];
// emptyArr.push(1, 23, 5, 'f');
// console.log(emptyArr);
// emptyArr[0] = "A";
// console.log(emptyArr)


// let txt = "SDFGHJKKKLLL";
// console.log(txt.length);

// let str = "Apple, Banana, Kiwi";
// console.log(str.slice(7,10));

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "M3School")
// console.log(newText)


// let text = "HELLO WORLD ";
// let result = text.repeat(2)
// console.log(result)
// 
// let arr = [28, 16, 25, 5, 41]

// let arr = new Array(2, 3, 5, "str", null, false);

// shift, unshift
// arr.unshift(10, 65, true);
// console.log(arr);

// arr.shift();
// console.log(arr.shift())

// let arr1 =[2, 3, 4, 5];
// let arrStr = ['wr', 'rt', 're'];
// let newArr =arrStr.concat(arr, arr1);
// console.log(newArr);

// arr1.reverse();
// console.log(arr1);

// let str = "Hello World";
// const arr = str.split('');
// console.log(arr)
// let newStr = arr.join("")
// console.log(newStr);

// let str = 'Hello world!';
// const arr = str.split('')
// console.log(arr);
// const newArr =arr.slice(2, 5);
// console.log(newArr);

// let arr = [1, 2, 3, 7]
// // splice(index, deleteCount, el1, el2, el3,..., elN);
// arr.splice(3, 0, 4, 5, 6);
// console.log(arr)

// indexOf, lastIndexOf, includes
//  indexOf(item, fromIndex);
// const arr = "Hello World".split('');
// console.log(arr);
// let index = arr.indexOf('l', 4);
// console.log(index)

// let arr = [28, 16, 37, 21, 17, 27];
// let min = Math.min(...arr);
// let newMin = Math.min(28, 16, 37, 21, 17, 27);
// let max = Math.max(...arr);

// console.log(min);
// console.log(max);
// console(newMin);

// math.round, math.floor, math.ceil

// let num = 6.764
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(num.toFixed(2))
// console.log(Math.sign(num))

// str = "1000.546.0099px";
// console.log(parseFloat(str));

// let num = 10;
// console.log(parseInt(num, 16))

// 345 => 543

// function convert(num){
//     let str = "" + Math.abs(num);
//     return Math.sign(num) * (+str.split("").reverse().join(""));

// }

// object
// let obj = new Object();
// let user = {};

// let obj = {
//     name: "Bob",
//     "age": 21,
//     "isAdult": true,
//     "salary": undefined,
//     4: null,
// };
// console.log(obj.age)

// let user = {
//     name: "John",
//     age: 30,
//     "high school": true,
// }

// console.log("original", user)

// user.age = 20;
// user.name = "Bill";
// console.log("modified", user);

// user.hello = "Hi";
// console.log("added new key - address and hello", user)

// delete user.hello;
// console.log("delete",user);

// const obj1 = {};
// obj1.name = "Jess";
// obj1["likes reading"] = true;
// console.log(obj1)

// let name1 = 'Anna';
// let age = 17;
// const user1 = { 
//     [name1]: age
// }
// console.log(user1);

// let user2 = {
//     newKey: undefined,
// };

// console.log(user.newKey);
// console.log(user.name === undefined);
// user.name = "Anna";

// let obj = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for(let key in obj){
//     console.log(obj[key]);
// }

// let obj = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumber(obj){
//     let res = 0;
//     for(let key in obj){
//         res += obj[key] * 2;
//         return res;
//     }
// }
// console.log(multiplyNumber(obj))


