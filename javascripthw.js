// for (начало, условие, шаг){

// }
// let str = 'JavaScript';
// for (let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// let x = [1, 2, 3, 4, 5];
// let str1 = "";
// for (let i = x.length - 1; i >= 0; i--){
//     str1 = str1 + x[i];
//     console.log(str1);
// }

// const numbers = [45, 15, 10, 9, 7];
// let txt = "";
// for (let x in numbers){
//     txt += numbers[x];
//     console.log(txt);
// } 
let x = "_____________________________"
let task = "Task ";
let num = 1;
console.log(task + num);

// small cup $3; middium cup $4; large cup $5;

let arr = [3, 4, 5];
let lCup = "Price for a large cup of coffee is $";
let sCup = "Price for a small cup of coffee is $";
let mCup = "Price for a medium cup of coffee is $";

for(let i = 0; i < arr.length - 2; i++){
    console.log(sCup + arr[i]);
}
for(let i = 1; i < arr.length - 1; i++){
    console.log(mCup + arr[i]);
}
for(let i = 2; i < arr.length; i++){
    console.log(lCup + arr[i]);
}
console.log(x);
console.log(task + ++num);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i <= arr1.length; i++){
    if (arr1[i] % 2 == 0){
        console.log(arr1[i])
    }
}

console.log(x);
console.log(task + ++num);
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его 
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 2;

for(let i = 1; i <= arr2.length - 1 ; i++){
    if (n > 1 && arr2[i] % n !== 0){
        console.log(arr2[i])
    }
}
console.log(x);
console.log(task + ++num);
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.
let str ="Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let line = "";
for(let i = 0; i < str.length; i+=3){
    line += str[i]
}
        console.log(line) 

// let n = 17;
// for (let i = 2; i <= n; i++){
//     let num = true;
//     for (let k = 2; k < i; k++){
//         if (i % k == 0){
//             num = false;
//         }
//     }
//     if (num == true){
//         console.log(i);
//     } 
//}
console.log(x);
console.log(task + ++num);

let arrey = [ '(', ')', '(', ')', ')'];
for (let i = 0; i < arrey.length; i++){
    if ( arrey[i] == '(' && arrey[i++] == ')'){
        
        console.log("скобки закрыты")
    }
    else {console.log ("скобки не закрыты")
}
}





