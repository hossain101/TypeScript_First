// Code: TypeScript


let names = ['Alice', 'Bob', 'Eve'];

names.push('Mallory');

// we can't push a number into an array of strings

//the types are determined by the values we put in the array in the begining 


// cant add aditional properties to an object
let worker = {
    name: 'Bob',
    job: 'Carpenter',
    age: 35

}

//assigning variables a specific type.
//Type annotation can only be used in typescript


let age: number;

let isLoggedIn: boolean;

//age = 'thirty-five';

let stuents: string[] =[] ;

//union types

let mixed: (string | number | boolean)[] = [];

let uid: string | number;

uid = '123';
uid = 123;



//objects

let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

 ninjaTwo = {
    name: 'Mario',
    age: 20,
    beltColour: 'black'
};





