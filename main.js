const road = parseInt(prompt("Quanti Km vuoi percorrere?"))
const userAge = parseInt(prompt("Quanti anni hai?"))
let price = road * 0.21

if (userAge < 18) {
    price = price - (price * 0.2)
} 
else if(userAge > 65){
    price = price - (price * 0.4)
}
else{
    price = price
}

document.getElementById("ticket").innerHTML = price.toFixed(2)