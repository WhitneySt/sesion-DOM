//-------- 1. Lógica de programación
//---algoritmos (pseudocódigo o diagrama de flujos)

import { getCharacters } from "../services/characterServices.js";


//-------2. Estructuras condicionales y cíclicas

//Yo cuándo sé que debo usarlas?
//...Condicionales
//--Cuando necesito evaluar algo condiciones, cuando necesito tomar decisiones


//...Bucles o cliclos
//--Cuando necesitamos que una tarea o un conjunto de tareas muchas veces (o n número de veces)

//-----EJERCICIO------
//--Programa que solicite cantidad de productos a comprar, solicitar la cantidad de veces indicadas el nombre y precio de cada producto. Si el producto cuesta más de 5000 pesos, lleva descuento del 5%, si cuesta más de 10000 lleva descuento del 10% y si cuesta más de 20000 lleva descuento del 20%. Mostrar la lista de productos, con el subtotal y total a pagar.

//1. ¿Cómo le vamos a preguntar al usuario la cantidad de productos que vá a comprar?

// const cantidadProductos = prompt('Por favor indique la cantidad de productos que va a comprar');
// let subtotal = 0;
// let total = 0;

//2. solicitar la cantidad de veces indicadas el nombre y precio de cada producto.

// for (let index = 1; index <= cantidadProductos; index++) {
//     const nombreProducto = prompt('Ingrese el nombre del producto');
//     const precioProducto = prompt('Ingrese precio del producto');
//     const precio = Number(precioProducto);
//     let descuento = 0;
//     //3. identificar el descuento que le aplica al producto
//     if (precio > 20000) {
//         descuento = 0.2;
//     } else if (precio > 10000) {
//         descuento = 0.1;
//     } else if (precio > 5000) {
//         descuento = 0.05;
//     } else {
//         descuento = 0;
//     }

//     subtotal = subtotal + precio;
//     total = total + precio * (1 - descuento);
//     console.log(nombreProducto);
// }

// console.log('Subtotal:', subtotal);
// console.log('Total :', total);






//-----3. Funciones

// let resultado = 0;

// const func = () => {
//     return "Esta es una función flecha"
// }

// const resultadoFuncion = func();

// console.log(resultadoFuncion);

// const sumaDeCincoNumeros = ({ num1, num2, num3, num4, num5 }) => {
//     const resultadoSuma = num1 + num2 + num3 + num4 + num5;
//     return resultadoSuma;
// }

// const obj = {
//     num1: 8, num2: 9, num3: 10, num4: 42, num5: 81, nuro5: 150, nuro3: 84
// }

// resultado = sumaDeCincoNumeros(obj);

// console.log(resultado);


// const func2 = () => "Esta es una función flecha"

// const saludar = (nombre) => `Hola ${nombre}, ¿Cómo estás?`

// const saludoAMariana = saludar('Mariana');
// console.log(saludoAMariana);

// //Si queremos saludar a una persona diferente

// const nombreDePersonas = ['Mónica', 'Kelly', 'Angie', 'Jesús'];

// //Escoger un número al azar entre 0 y 3

// const obtenerNumeroAzarEntero = (max, min) => Math.trunc((Math.random() * ((max + 1) - min) + min))

// const resultadoNumeroAzar = obtenerNumeroAzarEntero(3, 0);
// console.log(resultadoNumeroAzar);

// const indiceRandom = Math.trunc((Math.random() * (0.4 - 0) + 0) * 10);

// const nombre = nombreDePersonas[indiceRandom]
// const saludo = saludar(nombre);

// console.log(saludo);


// const nuevoArrayPersonas = nombreDePersonas.map((nombre) => {
//     return nombre.toLocaleLowerCase()
// });

// console.log(nuevoArrayPersonas);


//--- DOM y ¿cómo manipular los elementos de DOM?
//---Definición DOM, ¿Qué significa?
//---Métodos para manipular el DOM

//---Crear elementos
//----Actualizar elementos
//---Inyectar elementos

const personajesLosSimpson = [
    {
        id: 1,
        nombre: "Krusty el payaso",
        historia: "Herschel Schmoeckel Pinchas Yerucham Krustofsky (apellido que también se escribe Krustofski ) es el cínico, quemado y plagado de adicciones payaso presentador del programa de televisión favorito de Bart y Lisa",
        imagen: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Krusty_the_Clown_nz1z1o.png",
        genero: "Masculino",
        estado: "vivo",
        ocupacion: "Personalidad de televisión"
    },
    {
        id: 2,
        nombre: "Cletus",
        historia: "Cletus Del Roy Montfort Bigglesworth Spuckler , también conocido como Cletus the Slack-Jawed Yokel , es un campesino sureño estereotípico con una personalidad afable, es delgado y generalmente se lo representa con un par de jeans. Reside con su familia en la Ruta Rural 9 en Springfield .",
        imagen: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Cletus_Spuckler_rvpr9g.png",
        genero: "Masculino",
        estado: "vivo",
        ocupacion: "Granjero, trabajador de la construcción"
    },
    {
        id: 3,
        nombre: "Kirk Van Houten",
        historia: "Kirk Evelyn Van Houten es el padre desempleado de Milhouse y el esposo vuelto a casar de Luann.",
        imagen: "https://static.simpsonswiki.com/images/2/20/Kirk_Van_Houten.png",
        genero: "Masculino",
        estado: "vivo",
        ocupacion: "Desempleado"
    }
];

let personajes = [];

const cardContainer = document.getElementById('cardContainer');
const closeModal = document.getElementById('closeModal');
const modalContainer = document.getElementById('modalContainer');
const modal = document.getElementById('modal');
// cardContainer.innerHTML = "";
// personajesLosSimpson.forEach((persona) => {
//     const card = document.createElement("img");
//     card.setAttribute("src", persona.imagen);
//     card.setAttribute("alt", persona.nombre);
//     cardContainer.appendChild(card);
// });

const printCards = (array, container) => {
    container.innerHTML = "";
    array.forEach(element => {
        const card = document.createElement("img");
        card.setAttribute("src", element.Imagen);
        card.setAttribute("alt", element.Nombre);
        card.setAttribute("id-personaje", element._id);
        card.classList.add("card");
        container.appendChild(card);
    })
}


// const personajes = await getCharacters();
// console.log(personajes);


// printCards(personajesLosSimpson, cardContainer);



//---Eventos y Controladores de eventos

//Queremos escuchar el click de cada card

document.addEventListener("DOMContentLoaded", async () => {
    personajes = await getCharacters();
    
    printCards(personajes, cardContainer);
})

cardContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains('card')) {
        const idPersonaje = event.target.getAttribute("id-personaje");
        console.log(idPersonaje);
        const personaje = personajes.find((persona) => persona._id == idPersonaje);
        console.log(personaje);
        modalContainer.style.display = 'flex';
        modal.innerHTML = `
            <article>
                <h1>${personaje.Nombre}</h1>
                <img src=${personaje.Imagen} alt=${personaje.Nombre}>
                <div>
                    <h3>Historia</h3>
                    <p>${personaje.Historia}</p>
                </div>
            </article>
        `;
        
    }
})

closeModal.addEventListener("click", () => {
    console.log('click');
    modalContainer.style.display = 'none';
})




