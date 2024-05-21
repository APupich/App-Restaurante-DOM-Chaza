let cantidad = document.getElementById("cantidad");
let btnRestar = document.getElementById("restar");
let btnSumar = document.getElementById("sumar");
let subTotal = document.getElementById("subTotal");
let precioUnit = document.querySelector(".valorPlato");

let unit = 10;
let cant = 1;

cantidad.innerText = cant;
precioUnit.innerText = `$ ${unit}`;
console.log(unit);
console.log(cant);

subTotal.innerText = `Total: $ ${unit*cant}`;

btnRestar.innerText = "block";
btnRestar.style.color = "gray";

function restar() {
    if (cant > 1) {
        btnRestar.innerText = 'remove';
        btnSumar.innerText = 'add';
        btnRestar.style.color = "black";
        btnSumar.style.color = "black";
        cant = cant - 1;
        cantidad.innerText = cant;
    }else{
        btnRestar.innerText = 'block';
        btnRestar.style.color = "gray";
    }
    subTotal.innerText = `Total: $ ${unit*cant}`;
}

function sumar() {
    if (cant < 15) {
        btnRestar.innerText = 'remove';
        btnSumar.innerText = 'add';
        btnSumar.style.color = "black";
        btnRestar.style.color = "black";
        cant = cant + 1;
    cantidad.innerText = cant;
    }else{
        btnSumar.innerText = 'block';
        btnSumar.style.color = "gray";
    }
    subTotal.innerText = `Total: $ ${unit*cant}`;
}