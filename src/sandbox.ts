let greet: Function;

greet = () => {
    console.log('hello world');
}

const add = (a: number, b: number, c?: number | string ): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 4);

const minus = (a: number, b: number): number => {
    return a + b;
}

type StringONum = string | number;

type objWithName = { name: string, uid: StringONum };

const greetw = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

//function signature

//example 1

let greet1: (a : string, b: string) =>void;

greet1 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

//example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) :number => {
    if(action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

//example 3

let logDetails: (obj: {name: string, age: number}) => void;

 logDetails = (workers: {name: string, age: number}) => {
    console.log(`${workers.name} is ${workers.age} years old`); 
};


// Generics

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne.name);

//with interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {

    uid: 1,
    resourceName: 'person',
    data: {name: 'shaun'}
}

const docFour: Resource<string[]> = {

    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
}

console.log(docThree, docFour);


enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];


let tup: [string, number, boolean] = ['ryu', 25, true];