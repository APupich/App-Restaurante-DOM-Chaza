let body = document.getElementById("body");

fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            if (e.name == localStorage.getItem("titulo")) {
                body.innerHTML += /*html*/
                    ` <header class="restaurante">
<section class="portada">
    <a href="index.html" class="iconos">
        arrow_back
    </a>
    <div class="calificacion">
        ${e.rating}
    </div>
</section>
<section class="informacion">
    <div><br>
        <h2>${e.name}</h2>
        <p>${e.location} </p>
    </div>
    <div class="valor">
    ${`<span class="iconos verde f13">euro_symbol</span>`.repeat(e.price)}
    ${`<span class="iconos f13">euro_symbol</span>`.repeat(3 - e.price)}
    </div>
</section>
</header>
<main class="index">
<section class="datos">
    <div class="icon">
        <span class="iconos f25 amarillo">
            alarm_on
        </span>
        <p>
        ${e.open} - ${e.close}
        </p>
    </div>
    <div class="icon">
        <span class="iconos f25 naranja">
            pin_drop
        </span>
        <p>
        ${e.distance}
        </p>
    </div>
    <div class="icon">
        <span class="iconos f25 rojo">
            delivery_dining
        </span>
        <p>
            DELIVERY
        </p>
    </div>
</section>
<div class="descripcion-restaurante">
    <p>${e.description}</p>
</div>
</main>
<nav class="restaurant">
<a href="restaurante.html" class="resto selected">DETAILS</a>
<a href="menu.html" class="resto">MENU</a>
<a href="resenia.html" class="resto">REVIEWS</a>
</nav>`}
    });
    })