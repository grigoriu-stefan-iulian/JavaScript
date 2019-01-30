let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`I want to buy '${myBook.title}' by ${myBook.author}.`);

myBook.title = 'Animal Farm'

console.log(`I want to buy '${myBook.title}' by ${myBook.author}.`);

//Challenge

let person = {
    name: 'Stefan', 
    age: 24,
    location: 'Iasi'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
