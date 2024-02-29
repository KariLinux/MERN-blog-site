// array of strings that are people
const people = ['yoshi', 'ryu', 'mario', 'chun-li']; 
const ages = [20, 25, 30, 35]; 

console.log(people); 

// // what if we wanted to access people inside the modules file
// we have to manually export const people = ['ryu', 'mario',...]
// then what we manually export will be applied to 
// the xyz constant 
module.exports = people;

// what if we want to export multiple different things '
module.exports = {
// people: people
people, ages 
};
