let km = prompt("Chilometri da percorrere:");
console.log(km);
let età = prompt("Età del passeggero:");
console.log(età);
let cost = 0.21;
let underAgeDiscount = 20;
let overAgeDiscount = 40; 
let discount;
let price;

if (età < 18) {
    discount = ((km*cost)/100)*underAgeDiscount;
    price = (km*cost) - discount;
    console.log(price);
} else if (età > 65) {
    discount = ((km*cost)/100)*overAgeDiscount;
    price = (km*cost) - discount;
    console.log(price);
} else {
    price = km*cost;
    console.log(price);
};

 document.getElementById("output").innerHTML = `
    <p><strong>Chilometri:</strong> ${km}</p>
    <p><strong>Costo al KM:</strong> ${cost}€</p>
    <p><strong>Età:</strong> ${età}</p>
    <p><strong>Prezzo biglietto:</strong> ${price.toFixed(2)}€</p>
    `;

