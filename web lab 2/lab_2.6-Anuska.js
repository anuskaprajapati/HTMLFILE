// Create an array of countries
const countries = ["Nepal", "China", "Japan", "South Korea", "Thailand"];
//Use the forEach loop to iterate over each element in the array
countries.forEach(function(country, index) {
    console.log(`Country ${index + 1}: ${country}`);
});
//Create an array of objects representing people
const people = [
    { name: "Ren", age: 25},
    { name: "Win", age: 25},
    { name: "Mick", age: 30},
    { name: "Yusei", age: 27},
    { name: "Jinwoo", age: 32},
];
//Use the forEach loop to iterate over each object in the array
people.forEach(function(person, index) {
    console.log(`person ${index + 1}: Name - ${person.name}, Age - ${person.age}`);
});