let sum = 0;
for (let i = 1; i <= 25; i++) {
    if (i % 2 === 0) {
        sum += i; 
    }
}
console.log("The sum of all even numbers from 1 to 25 is: " + sum);