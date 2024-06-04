let body = document.getElementById("resto");
function estrellas(estrellas){
    const estrella = /*html*/`<span class="iconos verde f13">star</span>`
    const estrellaG = /*html*/`<span class="iconos f13">star</span>`
    let acum = "";
    for (let i = 0; i < estrellas; i++) {
        acum += estrella;
    }
    for (let i = 0; i < 5-estrellas; i++) {
        acum += estrellaG;
    }
    return acum;
}
function precio(dolares){
    const dol = /*html*/`<span class="iconos verde f13">euro_symbol</span>`
    const dolG = /*html*/`<span class="iconos f13">euro_symbol</span>`
    let acum = "";
    for (let i = 0; i < dolares; i++) {
        acum += dol;
    }
    for (let i = 0; i < 3-dolares; i++) {
        acum += dolG;
        
    }
    return acum;
}

fetch('js/restos.json')
.then(response => {
    return response.json()
    })
.then(data => {
    data.forEach(e => {
        body.innerHTML += /*html*/
        `<a  href="restaurante.html" id="${e.name}">
        <article class="oferta">
            <div class="img">
                <img src="${e.avatar.src}">
                <span>${e.distance}</span>
            </div>
            <div class="desc">
                <h2>${e.name}</h2>
                <span>${e.location}</span>
                <span>${e.open} - ${e.close}</span>
                <div class="stats">
                    <div class="estrellas">
                       ${estrellas(e.stars)}<span>(${e.cant_review})</span>
                    </div>
                    <div class="valor">
                    ${precio(e.price)}
                    </div>

                </div>
            </div>
            <div class="calificacion">${e.rating}</div>
        </article>
    </a>`
    });
})

addEventListener(click, (e) =>{
    let click = document.getElementById()
    console.log(e.currentTarget);
})