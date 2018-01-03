function add(){
  var startButton= document.getElementById("inicio"); //llamo a mi boton inicial
  var conteinerOne = document.getElementById("contenedor"); // llamo a mi contenedor principal

  var conteinerTwo = document.createElement("div"); // creo un contenedor que tendrá el input y el btn
    conteinerTwo.className ="box"; // clase al div

  var input = document.createElement("input"); //con el metodo createElement creo un input
    input.setAttribute("type", "text"); // al input creado le digo que será de tipo texto
    input.setAttribute("placeholder", "Añadir una lista"); // le agrego un placeholder al input para al hacer click desaparesca 
    input.className="entrada";

  var buttonSave = document.createElement("button"); // con el metodo createElement creo un boton 
    buttonSave.textContent = "Guardar"; // al boton creado le agrego la definicion de guardar
    buttonSave.className="buttonSave"; //al boton le doy una clase para modificar sus atributos en .css
  //agregamos nodos ------
  conteinerTwo.appendChild(input); //agrego el input al contenedor
  conteinerTwo.appendChild(buttonSave); //agrego mi btn al contenedor
  conteinerOne.appendChild(conteinerTwo); // agrego mi contenedor input al contenedor principal

  buttonSave.addEventListener("click", function(){ // creo un evento a mi boton guardar
    var tittle = document.createElement("h1"); // creo un h1 para donde irá guardado lo q pongo en el input
        tittle.textContent = input.value; // retengo el valor del input
    conteinerTwo.removeChild(input); //elimino el input
    conteinerTwo.removeChild(buttonSave); // elimino el boton


    conteinerOne.appendChild(tittle); // agrego mi h1 algo contenedor principal
    var addAcard = document.createElement("button"); // agrego un boton
      addAcard.className="addbutton";
        addAcard.textContent="añadir una tarjeta"; // le agrego un titulo al boton
    conteinerOne.appendChild(addAcard); //  agrego mi boton al contenedor principal

    addAcard.addEventListener("click",function(){ // agrego un evento a mi boton añadir una tarjeta
        var txt = document.createElement("textArea"); // creo un textArea 
        txt.className="texto";
        var add = document.createElement("button"); // con el metodo createElement creo un boton añadir
            add.textContent="añadir"; //  coloco un nombre 
        add.className="putbutton";
        conteinerOne.removeChild(addAcard); // elimino mi boton añadir tarjeta
        conteinerOne.appendChild(txt); // con appendChild agrego mi texarea al contenedor principal
        conteinerOne.appendChild(add); // con appendChild agrego el boton al contenedor principal


      add.addEventListener("click", function(){ // creo un evento a mi boton añadir
          var paragraph = document.createElement("p"); // creo un elemento parrafo
          paragraph.textContent= txt.value;  // rescato el valor
          txt.value = ""; // limpio
          conteinerOne.appendChild(paragraph); // agrego mi parrafo al primer contenedor
          conteinerOne.insertBefore(paragraph,txt); // 
      })
    })
  })
}
