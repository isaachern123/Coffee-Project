"use strict"

function renderCoffee(coffee) {

    return '<h3 class="coffee-name-font">' + coffee.name + '<small class="coffee-roast-font">' + coffee.roast + '</small>' + '</h3>';
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
        // e.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        let filteredCoffees = [];

        if(selectedRoast === 'all') {
            coffees.forEach(function (coffee) {
                filteredCoffees.push(coffee);
            })
        } else coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
    });
    body.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffees(value) {
    let filteredCoffees = [];
    for (let i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) >  -1) {
            filteredCoffees.push(coffees[i]);
        } else
            if(coffees[i].roast.toLowerCase().indexOf(value.toLowerCase()) >  -1) {
                filteredCoffees.push(coffees[i]);
            }

    }
    body.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    let coffee = {
        name: '',
        roast: '',
    };

    let newCoffee = document.getElementById('add-coffee-name').value;
    coffee.name = formatNewCoffee(newCoffee);
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    arrangeCoffee()
    body.innerHTML = renderCoffees(coffees);
}
    function arrangeCoffee() {
    coffees.sort(function (a,b) {
        return a.id - b.id
    });
    coffees.reverse();
    }

    function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function (letter) {
        return letter.toUpperCase()
    })
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


let body = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let submitButton2 = document.querySelector('#add-coffee');
let roastSelection = document.querySelector('#roast-selection');

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addCoffee);

// roastSelection.addEventListener('change', updateCoffees2);

body.innerHTML = renderCoffees(coffees);
