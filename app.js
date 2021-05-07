// first class increment btn
function firstClassIncrement() {
    const firstClassElement = document.getElementById('first-class-ticket').value;
    const firstClassCount = parseInt(firstClassElement) + 1;
    document.getElementById('first-class-ticket').value = firstClassCount;

    totalPrice();
}


// first class decrement btn
function firstClassDecrement() {
    const firstClassElement = document.getElementById('first-class-ticket').value;
    let firstClassCount = parseInt(firstClassElement) - 1;
    if (firstClassCount <= 0) {
        firstClassCount = 0;
    }
    document.getElementById('first-class-ticket').value = firstClassCount;

    totalPrice();
}


// economy increment
function economyIncrement() {
    const economyElement = document.getElementById('economy-ticket').value;
    const economyClassCount = parseInt(economyElement) + 1;
    document.getElementById('economy-ticket').value = economyClassCount;

    totalPrice();
}


// economy decrement
function economyDecrement() {
    const economyElement = document.getElementById('economy-ticket').value;
    let economyCount = parseInt(economyElement) - 1;
    if (economyCount <= 0) {
        economyCount = 0;
    }
    document.getElementById('economy-ticket').value = economyCount;

    totalPrice();
}


// total price
function totalPrice() {
    const firstClassElement = document.getElementById('first-class-ticket').value;
    const economyElement = document.getElementById('economy-ticket').value;

    const total = (parseInt(firstClassElement) * 150) + (parseInt(economyElement) * 100);
    const tax = (total / 100) * 10;
    const grandTotalPrice = total + tax;

    document.getElementById('total').innerText = `$ ${total}`;
    document.getElementById('tax').innerText = `$ ${tax}`;
    document.getElementById('grand-total-price').innerText = `$ ${grandTotalPrice}`;


}