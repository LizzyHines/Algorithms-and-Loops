// numbers 1 to 20
// "fizz" even numbers
// "buzz" able to divide by five
// "foo" if neither


// let number = 0;
//
// while (number <= 20) {
//     console.log(number);
//     number = number + 2;
//     console.log("fizz");
// }
//
// while (number <= 20) {
//     console.log(number);
//     number = number + 5;
//     console.log("buzz");
// }
//
// while (number <= 20);
//     console.log(number);

for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
        console.log("fizz");
    } else if (i % 2 === 0) {
        console.log("buzz");
    } else console.log("foo");
}