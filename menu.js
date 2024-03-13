fetch(menu.json)

//que hace esta linea? esta linea inicia la carga del archivo menu.json,
 //fetch es una funcion de javascript que facilita la realizacion de solicitudesde red como obtener datos de un archivo o un endpointde API.
//como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si mo un objeto de respuesta que incluye varios detalles sobre la respuesta misma.

.then(response => response.json())
//Que hace? Esta linea toma el objeto de respuesta obtenidos del fetch y el utiliza el metodo .json() 
//para convertir el cuerpo de la respuesta en un objeto javascript (esto asume el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON.

.then(data =>{
    const menuContainer = document.getElementById('menu-container');
    //Que hace? aqui se presenta los datos JSON ya convertidos. Se obtienen una referencia 
    //el contenedor del menu en el HTML mediante getElementByid ('menu-container'), y luego se itera sobre los elementos (categorias) del menu.
    data.items. forEach(category => {
        const categoryTitle = document.createElement('h2');
        //Que hace?? Aqui se crea un elemento h2 y se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenido menu.
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table')
        //Que hace aqui se crea un elemento table para cada categoria. Ademas, se prepara el
        //encabeazdo (tablehead) con las columnas pertinentes,tableBody se inicializa vacio y se llenacon los elementos de la categoria.
        const tablehead = `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>`;
        let tableBody = '';
    });
})
