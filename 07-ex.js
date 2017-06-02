"use strict"


let m = ['Sofia','Varna', 'Plovdiv','Burgas'];

m.forEach((value,index)=> console.log(`m[${index}]=${value}`));

let city = m.find( (city)=>{ return city === 'Sofia'});

console.log(`city: ${city}`);