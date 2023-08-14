import { Invoice } from './classes/Invoice.js';
const form = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
    console.log("Value Log: " + type.value, tofrom.value, details.value, amount.valueAsNumber);
});
const inv1 = new Invoice('Shoaib', 'Work on the Shoaib Website', 250);
console.log(inv1.format());
const me = {
    name: 'Shoaib',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
