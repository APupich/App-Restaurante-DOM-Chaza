let body = document.getElementById("menu");

fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            if (e.name == localStorage.getItem("titulo")) {
                e.menu.forEach((el)=>{
                    body.innerHTML += /*html*/
                    `<a href="comida.html" class="platillo">
                    <div class="img">
                      <img src="img/pngwing.com.png" />
                      <span>$ ${el.price} </span>
                    </div>
                    <div class="desc">
                      <h2>${el.name} </h2>
                      <p>${el.description} </p>
                    </div>
                  </a>`
                })
                
            }
        });
    })