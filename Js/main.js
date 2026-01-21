// import { CountUp } from "./countUp.min.js";

// document.addEventListener("DOMContentLoaded", () => {

//     const panel = document.querySelector(".panel");
//     let animated = false;

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && !animated) {
//                 animated = true;

//                 // Aceleración
//                 setTimeout(() => {
//                     new CountUp("carsAceleracion", 4.8, {
//                         startVal: 0,
//                         decimalPlaces: 1,
//                         duration: 1.4,
//                         decimal: ",",
//                         separator: ""
//                     }).start();
//                 }, 0);

//                 // Potencia
//                 setTimeout(() => {
//                     new CountUp("carsPotencia", 300, {
//                         startVal: 0,
//                         duration: 1.4,
//                         separator: ""
//                     }).start();
//                 }, 200);

//                 // Potencia2
//                 setTimeout(() => {
//                     new CountUp("carsPotenciaCV", 480, {
//                         startVal: 0,
//                         duration: 1.4,
//                         separator: ""
//                     }).start();
//                 }, 200);
//                 // Velocidad
//                 setTimeout(() => {
//                     new CountUp("carsVelocidad", 230, {
//                         startVal: 0,
//                         duration: 1.4,
//                         separator: ""
//                     }).start();
//                 }, 400);

//                 observer.disconnect();
//             }
//         });
//     }, {
//         threshold: 0.4
//     });

//     observer.observe(panel);
// });


import { CountUp } from "./countUp.min.js";

function animarNumeros(coche) {
  new CountUp("carsAceleracion", coche.aceleracion, {
    startVal: 0,
    decimalPlaces: 1,
    duration: 2.5,
    decimal: ","
  }).start();

  new CountUp("carsPotencia", coche.potenciaKW, {
    startVal: 0,
    duration: 2.5
  }).start();

  new CountUp("carsPotenciaCV", coche.potenciaCV, {
    startVal: 0,
    duration: 2.5
  }).start();

  new CountUp("carsVelocidad", coche.velocidad, {
    startVal: 0,
    duration: 2.5
  }).start();
}

const card = document.getElementById('izda');

export { animarNumeros };

 const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
    animarNumeros('berlina')

        obs.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(card);
;
