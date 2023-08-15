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


//example 4
console.log('example 4');
