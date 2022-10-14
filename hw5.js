let line = "____________________________";
let task = "Task # ";
let task1 = 1;
console.log(task + task1++ + "\n" + line);

let n = 10;
let str = '';
for (let i = 1; i <=n; i++) {
    str += " ".repeat(n-i);
        for (let j = 1; j < i; j++) {
            str += j;
        }
            for (let j = i; j >= 1; j--) {
                str += j;
            }
        str += '\n';
}
for (let i = n - 1; i >= 0; i--) {
    str += " ".repeat(n-i);
        for (let j = 1; j < i; j++) {
            str += j;
        } 
            for (let j = i; j >= 1; j--) {
                str += j;
            }
        str += '\n';
        }
    

console.log(str)


console.log(task + task1++ + "\n" + line);
let n1 = 5;
let str1 = " ";

for( let i = 0; i <= 5; i++){
    str1 += " ".repeat(n1--);
    for( let j = 1; j < i; j++){
        str1 += "*";
    }
    for( let j = i; j >= 1; j--){
            str1 += "*";
    }
    
     str1 += "\n";
}

     console.log(str1)





console.log(task + task1++ + "\n" + line);
let num2 = 5;
let str2 = " ";

for( let i = 0; i <= 5; i++){
    let sum = i;
    for( let j = 1; j <= i; j++){
        str2 += sum + " ";
        sum = sum + (num2 - j);
    }
    str2 += "\n";
}
console.log(str2)

console.log(task + task1++ + "\n" + line);

let k = "Turkey";
let k1 = "Tuna";
let k2 = "Roast beef";
let price = 5;
let sum1;
while (sum1 = k) break
{
     console.log(" Order # \n"+ k +" sangwich \n Price $" + price + "\n");
};
while (sum1 = k1) break
{
     console.log(" Order # \n" + k1 + " sangwich \n Price $" + price * 1.5 + "\n");
};
while (sum1 = k2) break
{
     console.log(" Order # \n" + k2 +" sangwich \n Price $" + price * 2);
}





