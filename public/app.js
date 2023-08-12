"use strict";
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
