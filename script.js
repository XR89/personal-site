'use strict'
const image1 = document.getElementById('image-1')
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const closeAbout = document.getElementById("close-about");


document.querySelector('#about').addEventListener('click', (event) => {
  event.preventDefault();


  closeAbout.classList.remove("hidden");

  //array of .image's
  document.querySelectorAll(".images").forEach((image, index) => {

    // setTimeout -> does a function after x milliseconds
    // the function -> fade in the image
    // using the index, we can multiply the index by 1000 milliseconds
    // 0: would load instantly because 0 * 1000 milliseconds = 0
    // 1: would load in after 1 second because 1 * 1000 milliseconds = 1 second
    // 2: would load in after 2 seconds because 2 * 1000 milliseconds = 2 seconds

    setTimeout(() => {
      // Initialising opacity to 0
      let opacity = 0;
      // storing the interval in a variable so we can clear it later
      // setInterval repeats the function every x milliseconds UNTIL IT IS CLEARED (clearInterval)
      // equivalent to do { } while (condition)
      let opacityTimeout = setInterval(() => {
        // increasing the opacity every nth millisconds (10)
        opacity += 0.01;
        // updating the image opacity
        image.style.opacity = opacity;
        if (opacity == 1) {
          // clearing the interval because we have already reached 1 opacity (opacity ranges from 0 - 1)
          clearInterval(opacityTimeout);
        }
      }, 10);
    }, index * 1000);

    image.style.opacity = 0;

    image.classList.remove("hidden");
  });
})
