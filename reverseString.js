function reverseString(str) {
    return str.split('').reverse().join('');
}

let input = "Hello, World";  

console.log("Normal String:", input);

setTimeout(() => {
    let reversed = reverseString(input);
    console.log("Reversed String:", reversed);
}, 2000);
