function add() {
// body...llamo a los elementos que necesito para crear interacción
    var contlista = document.getElementById('contenedorlista');
    var lista = document.getElementById('tareas');
//creo elementos que no existen en html con createElement
    var nuevoFormulario = document.createElement('formulario');
    var listas= document.createElement('input');
    var boton = document.createElement('button');
    var nodoText=document.createTextNode('guardar');
// atributos
    listas.setAttribute('placeholder','Añadir una lista...');
    listas.setAttribute('id','listas')
    boton.setAttribute("type", "button");
 //nodos
    boton.appendChild(nodoText);
    nuevoFormulario.appendChild(listas);
    nuevoFormulario.appendChild(boton);

    lista.appendChild(nuevoFormulario);

 //hacer invisible el contenedor al momento de hacer click 
    contenedortext=document.getElementById('createList');
    contenedortext.setAttribute('style','display:none');


    boton.addEventListener('click', function(){ // para guardar
        var listext = document.getElementById('listas').value; //guarda la información que contiene el input
        document.getElementById('listas').value=''; //limpiar texto

        if(listext == "" || listext == null){ // valida que no esté vacía la caja de texto
            alert("No puede quedar el campo vacío");
            return; 
        }
        
        //llamar los elementos 
        var secondContainer= document.getElementById('tareas');
        var box=document.createElement('div');
        var paraTxt=document.createElement('p');
        var txtlista=document.createTextNode(listext);
        var addNewCard=document.createElement('a');
        var txtnuevo=document.createTextNode('Añadir una tarea');

        //atributos
        paraTxt.classList.add('listText');
        box.classList.add('paraTxt');
        addNewCard.setAttribute('id','link');

        //asignar hijos
        secondContainer.appendChild(box);
        box.appendChild(paraTxt);
        paraTxt.appendChild(txtlista);
        box.appendChild(addNewCard);
        addNewCard.appendChild(txtnuevo);
    })
}