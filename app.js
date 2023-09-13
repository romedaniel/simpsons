let paginaSiguiente = 0;

function inicio(opcion){
  if(opcion) paginaSiguiente++;
    else paginaSiguiente--;
  
  let url = `https://apisimpsons.fly.dev/api/personajes?limit=20&page=${paginaSiguiente}`;


  fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.docs.forEach(personaje => {
            document.getElementById("listado").innerHTML += `
          <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img style="width:auto; height:auto;" src="${personaje.Imagen}">
                </div>
              <div class="card-content">
                <h6 class="center">${personaje.Nombre}</h6>
                <p><b>${personaje.Ocupacion}</b></p>
                <i>${personaje.Historia}</i>
              </div>
            </div>
          </div>
        `;
        });
    });

  }

//inicio();

function nuevaPagina(opcion){
  document.getElementById("listado").innerHTML = "";
  inicio(opcion);
}

function buscarPersonaje(){
  let nombreABuscar = document.getElementById("nombre").value;
  let url = `https://apisimpsons.fly.dev/api/personajes/find/${nombreABuscar}`;

   fetch(url)
   .then(respuesta => respuesta.json())
   .then(datos => mostrarResultados(datos))


  }

  function mostrarResultados(datos){

    if (datos.result.length == 0) document.getElementById("titulo").innerHTML = "no hay resultados";

    else {document.getElementById("listado").innerHTML = "";
    datos.result.forEach(personaje => {
      document.getElementById("listado").innerHTML += `
          <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img style="width:auto; height:auto;" src="${personaje.Imagen}">
                </div>
              <div class="card-content">
                <h6 class="center">${personaje.Nombre}</h6>
                <p><b>${personaje.Ocupacion}</b></p>
                <i>${personaje.Historia}</i>
              </div>
            </div>
          </div>
        `;
    });}
  }
