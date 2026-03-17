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

function getUserData () {
    return {
        name: 'Mocca',
        email: 'moccad3v@gmail.com'
    };
}

const getUserData2 = () => {
    return {
        name: 'Mocca',
        email: 'moccad3v@gmail.com'
    }
}

const user = getUserData();
const user2 = getUserData2();

console.log(user, user2);