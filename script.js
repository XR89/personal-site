"use strict";
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const closeAbout = document.getElementById("close-about");
const closeProjects = document.getElementById("close-projects");

const fadeIn = function (classTofade, closeButton, event) {
   event.preventDefault();

   closeButton.classList.remove("hidden");

   document.querySelectorAll(classTofade).forEach((item, index) => {
     setTimeout(() => {
       let opacity = 0;

       let opacityTimeout = setInterval(() => {
         opacity += 0.01;

         item.style.opacity = opacity;
         if (opacity == 1) {
           clearInterval(opacityTimeout);
         }
       }, 10);
     }, index * 1000);

     item.style.opacity = 0;

     item.classList.remove("hidden");
   });
}


document.querySelector('#more-info').addEventListener('click', (event) =>{
  fadeIn('.projects', closeProjects, event);
});

document.querySelector("#about").addEventListener("click", (event) => {
  fadeIn(".images", closeAbout, event);
});
