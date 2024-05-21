let cantidad = document.getElementById("cantidad");
let btnRestar = document.getElementById("restar");
let btnSumar = document.getElementById("sumar");
let cant = 1;

cantidad.innerText = cant;
btnRestar.innerText = "block";
function restar() {
    if (cant > 1) {
        btnRestar.innerText = 'remove';
        btnSumar.innerText = 'add';
        cant = cant - 1;
        cantidad.innerText = cant;
    }else{
        btnRestar.innerText = 'block';
    }
}

function sumar() {
    if (cant < 15) {
        btnRestar.innerText = 'remove';
        btnSumar.innerText = 'add';
        cant = cant + 1;
    cantidad.innerText = cant;
    }else{
        btnSumar.innerText = 'block';
    }
    
}