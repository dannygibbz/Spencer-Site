//Select element function

const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

// scroll reveal

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

let message = document.getElementById("message");
let facebook = document.getElementById("facebook");
let linkedin = document.getElementById("linkedin");

let about = document.getElementById("about");
let contactInfo = document.getElementById("contactInfo");
let expertise = document.getElementById("expertise");
let writing = document.getElementById("writing");

about.addEventListener("click", () => {
  body.classList = "closed";
});

contactInfo.addEventListener("click", () => {
  body.classList = "closed";
});

expertise.addEventListener("click", () => {
  body.classList = "closed";
});

writing.addEventListener("click", () => {
  body.classList = "closed";
});
