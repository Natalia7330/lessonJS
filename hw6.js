let task = "Task #";
let z = 1;
let line = "________________________";
console.log(task + z++ + "\n" + line);

let ordering = function (product){
    console.log("Order # 17" + "\n" + product + "\n")
}
ordering("A small cup of coffee");

function sum(priceCoffee, priceDonut){
    return priceCoffee + priceDonut
} 
console.log("Total: $"+sum(5,3) + "\n")



/

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




console.log(task + z++ + "\n" + line);

function calculate (a, b, operator){
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a -b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;

    }
   
}
console.log(calculate(5,22, "*") + "\n");

console.log(task + z++ + "\n" + line);

let greetings = function (name){
    console.log("Hi," + name + ", have a wonderful day")
}
greetings ("Natalia");

