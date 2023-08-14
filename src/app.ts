import {Invoice} from './classes/Invoice.js';


const form = document.querySelector('form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    console.log(e);
    e.preventDefault();
    
    console.log( "Value Log: "+type.value, tofrom.value, details.value, amount.valueAsNumber);
    });


    
   const inv1 = new Invoice('Shoaib', 'Work on the Shoaib Website', 250);

   console.log(inv1.format());


   interface IsPerson{
    name : string;
    age : number;
    speak(a: string): void;
    
   }



