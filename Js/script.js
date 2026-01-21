import { animarNumeros } from "./main.js";

// Datos de los coches
const coches = {
  berlina: {
    nome: "Taycan",
    pvp: "Desde EUR 106.252,00 PVP Recomendado <sup>1</sup>",
    imaxeCoche: "/styles/assets/cars/models/taycan-berlina.avif",
    imaxeFrontal: "/styles/assets/cars/front/frente-taycan-berlina.avif",
    aceleracion: 4.8,
    potenciaKW: 300,
    potenciaCV: 408,
    velocidad: 230
  },
  sport: {
    nome: "Taycan Sport Turismo",
    pvp: "Desde EUR 107.539,00 PVP Recomendado <sup>1</sup>",
    imaxeCoche: "/styles/assets/cars/models/taycan-sport.avif",
    imaxeFrontal: "/styles/assets/cars/front/frente-taycan-sport.avif",
    aceleracion: 4.8,
    potenciaKW: 300,
    potenciaCV: 408,
    velocidad: 230
  },
  cross: {
    nome: "Taycan 4 Cross Turismo",
    pvp: "Desde EUR 119.013,00 PVP Recomendado <sup>1</sup>",
    imaxeCoche: "/styles/assets/cars/models/taycan-cross.avif",
    imaxeFrontal: "/styles/assets/cars/front/frente-taycan-cross.avif",
    aceleracion: 4.7,
    potenciaKW: 320,
    potenciaCV: 435,
    velocidad: 220
  }
};

// Elementos del DOM
const carsNombre = document.getElementById("carsNombre");
const carsPvp = document.getElementById("carsPvp");
const imgModels = document.getElementById("imgModels");
const carsFront = document.getElementById("carsFront");

const botones = document.querySelectorAll(".button__menu");

// Función para cambiar coche
function botonMostrar(tipo) {
  const coche = coches[tipo];

  carsNombre.textContent = coche.nome;
  carsPvp.innerHTML = coche.pvp;
  imgModels.src = coche.imaxeCoche;
  carsFront.src = coche.imaxeFrontal;

  animarNumeros(coche);
}

// Evento de los botones
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("active"));
    boton.classList.add("active");
    botonMostrar(boton.dataset.filter);
  });
});








//  import { animarNumeros } from "./main.js";

// const coches = {
//     "berlina": {
//       "nome": "Taycan",
//       "pvp": "Desde EUR 106.252,00 PVP Recomendado <sup>1</sup>",
//       "imaxeCoche": "/styles/assets/cars/models/taycan-berlina.avif",
//       "imaxeFrontal": "/styles/assets/cars/front/frente-taycan-berlina.avif",
//      "aceleracion":4.8,
//      "potenciaKW":300,
//       "potenciaCV":408,
//      "velocidad":230

//     },
//     "sport": {
//       "nome": "Taycan Sport Turismo",
//       "pvp": "Desde EUR 107.539,00 PVP Recomendado <sup>1</sup>",
//       "imaxeCoche": "/styles/assets/cars/models/taycan-sport.avif",
//       "imaxeFrontal": "/styles/assets/cars/front/frente-taycan-sport.avif",
//         "aceleracion":4.8,
//     "potenciaKW":300,
//     "potenciaCV": 408,
//     "velocidad": 230
    
//     },
//     "cross": {
//       "nome": "Taycan 4 Cross Turismo",
//       "pvp": "Desde EUR 119.013,00 PVP Recomendado <sup>1</sup>",
//       "imaxeCoche": "/styles/assets/cars/models/taycan-cross.avif",
//       "imaxeFrontal": "/styles/assets/cars/front/frente-taycan-cross.avif",
//         "aceleracion": 4.7,
//     "potenciaKW": 320,
//     "potenciaCV": 435,
//     "velocidad":220
//     }
//   }
       
 

// const carsNombre = document.getElementById("carsNombre");
// const carsPvp = document.getElementById("carsPvp");
// const imgModels = document.getElementById("imgModels");
// const carsFront = document.getElementById("carsFront");

// const botones = document.querySelectorAll(".button__menu");

// function botonMostrar(tipo) {
//   const coche = coches[tipo];

//   carsNombre.textContent = coche.nome;
//   carsPvp.innerHTML = coche.pvp;
//   imgModels.src = coche.imaxeCoche;
//   carsFront.src = coche.imaxeFrontal;

//   animarNumeros(coche);
// }

// botones.forEach(boton => {
//   boton.addEventListener("click", () => {
//     botones.forEach(b => b.classList.remove("active"));
//     boton.classList.add("active");

//     botonMostrar(boton.dataset.filter);
//   });
// });


  
//   const carsNombre = document.getElementById("carsNombre");
//   const carsPvp = document.getElementById("carsPvp");
//   const imgModels = document.getElementById("imgModels");
//   const carsFront = document.getElementById("carsFront");
//    const carsAceleracion = document.getElementById("carsAceleracion");
//     const carsPotencia = document.getElementById("carsPotencia");
//      const carsVelocidad = document.getElementById("carsVelocidad");

//   const botones = document.querySelectorAll(".button__menu");

  




//   function botonMostrar(porches){

   

// switch (porches) {
//         case 'berlina':
//             carsNombre.textContent = coches.berlina.nome;
//             carsPvp.innerHTML = coches.berlina.pvp
//             document.getElementById("imgModels").src = coches.berlina.imaxeCoche;
//             document.getElementById("carsFront").src = coches.berlina.imaxeFrontal;
//             carsAceleracion.innerHTML = coches.berlina.aceleracion;
//             carsPotencia.innerHTML = coches.berlina.potencia;
//             carsVelocidad.innerHTML = coches.berlina.velocidad;
           
            
            

//             break;

  
//        case 'sport':
//              carsNombre.textContent = coches.sport.nome;
//             carsPvp.innerHTML = coches.sport.pvp
//             document.getElementById("imgModels").src = coches.sport.imaxeCoche;
//             document.getElementById("carsFront").src = coches.sport.imaxeFrontal;
//             carsAceleracion.innerHTML = coches.sport.aceleracion;
//             carsPotencia.innerHTML = coches.sport.potencia;
//             carsVelocidad.innerHTML = coches.sport.velocidad;

//             break;

  
//          case 'cross':
//              carsNombre.textContent = coches.cross.nome;
//             carsPvp.innerHTML = coches.cross.pvp
//             document.getElementById("imgModels").src = coches.cross.imaxeCoche;
//             document.getElementById("carsFront").src = coches.cross.imaxeFrontal;
//             carsAceleracion.innerHTML = coches.cross.aceleracion;
//             carsPotencia.innerHTML = coches.cross.potencia;
//             carsVelocidad.innerHTML = coches.cross.velocidad;
           
            

//             break;

//   }

//  }
 
// botones.forEach(boton => {
//     boton.addEventListener("click", () => {

      
//         botones.forEach(b => b.classList.remove("active"));
       
//         boton.classList.add("active");

        
//         const porches = boton.dataset.filter;

//         botonMostrar(porches);
//     });
// });

// import { animarNumeros } from "./main.js";

// function botonMostrar(porches) {

//   const coche = coches[porches];

//   carsNombre.textContent = coche.nome;
//   carsPvp.innerHTML = coche.pvp;
//   imgModels.src = coche.imaxeCoche;
//   carsFront.src = coche.imaxeFrontal;

//   animarNumeros(coche);
// }