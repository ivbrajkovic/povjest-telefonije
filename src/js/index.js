import "../style/style.css";
// import "../style/swiper.min.css";
import "../../node_modules/glightbox/dist/css/glightbox.min.css";

import GLightbox from "glightbox";

// Import Swiper and modules
// import { Swiper, Navigation } from "swiper/js/swiper.esm.js";

// Init AOS
AOS.init({ offset: 150 });

GLightbox({
  selector: "glightbox-telefonija",
  loop: true
});

GLightbox({
  selector: "glightbox-internet",
  loop: true
});

// Install modules
// Swiper.use([Navigation]);
// var mySwiper = new Swiper(".swiper-container", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   }
// });
// console.log("TCL: mySwiper", mySwiper);

// function component() {
//   const element = document.createElement("pre");
//   element.innerHTML = "Hello webpack! 5 cubed is equal to " + cube(5);
//   return element;
// }

// document.body.appendChild(component());

// alert("Hello world from Webpack!!");

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle, faAdjust } from "@fortawesome/free-solid-svg-icons";

// import React from "react";
// import ReactDOM from "react-dom";

// import First from "./first";
// import Second from "./Second";

// const App = () => (
//   <>
//     <First />
//     <Second />
//   </>
// );

// const node = document.getElementById("app");
// console.log("TCL: node", node);

// ReactDOM.render(<App />, node);
