const flash = {
    firstName: "Barry",
    lastName: "Allen",
    age: 22,
    address: {
        postalCode: 'ABC123',
        city: 'Central'
    },
};

const spiderman = structuredClone(flash)

spiderman.firstName = 'Peter',
spiderman.lastName = 'Parker',
spiderman.age = 16,
spiderman.address.city = 'Brooklyn',

console.log(flash, spiderman);