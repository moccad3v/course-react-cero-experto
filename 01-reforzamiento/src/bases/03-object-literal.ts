interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    postalCode: string;
    city: string;
}

const flash: Person = {
    firstName: "Barry",
    lastName: "Allen",
    age: 22,
    address: {
        postalCode: 'ABC-123',
        city: 'Central'
    },
};

console.log(flash);

// const spiderman = structuredClone(flash)

// spiderman.firstName = 'Peter',
// spiderman.lastName = 'Parker',
// spiderman.age = 16,
// spiderman.address.city = 'Brooklyn',

// console.log(flash, spiderman);