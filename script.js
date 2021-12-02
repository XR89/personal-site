"use strict";
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const closeAbout = document.getElementById("close-about");
const closeProjects = document.getElementById("close-projects");
const project1 = document.getElementById("project-1");
const project2 = document.getElementById("project-2");
const project1Text = document.getElementById("project-1-text");
const project2Text = document.getElementById("project-2-text");
const project1Image = document.getElementById("project-1-image")
const project2Image = document.getElementById("project-2-image");
// const project1Image

const removeHiddenClass = function (element) {
  element.classList.remove("hidden");
};

const addHiddenClass = function (element) {
  element.classList.add("hidden");
};

const opacityChange = function (element) {
   element.style.opacity = 0.6;
   element.style.transition = "0.6s ease";
}

const opacityEaseOut = function (element) {
  element.style.opacity = 1;
  element.style.transition = "0.6s ease";
}


const fadeIn = function (classTofade, closeButton) {
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
};

document.querySelector("#more-info").addEventListener("click", (event) => {
  fadeIn(".projects", closeProjects);
});

document.querySelector("#about").addEventListener("click", (event) => {
  fadeIn(".images", closeAbout);
});

// Mouse over and out for projects visit text

project1.addEventListener("mouseover", () => {
  removeHiddenClass(project1Text);
  opacityChange(project1Image)
});

project1.addEventListener("mouseout", () => {
  addHiddenClass(project1Text);
  opacityEaseOut(project1Image);
});

project2.addEventListener("mouseover", () => {
  removeHiddenClass(project2Text);
  opacityChange(project2Image);
});

project2.addEventListener("mouseout", () => {
  addHiddenClass(project2Text);
  opacityEaseOut(project2Image);
});
