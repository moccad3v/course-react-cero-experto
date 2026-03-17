function greet (name: string): string {
    return `Hi ${name}`;
}

const greet2 = (name: string): string => {
    return `Hi ${name}`;
}

const message = greet('Mocca');
const message2 = greet2('Juan');

console.log(message);
console.log(message2);