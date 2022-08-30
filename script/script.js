"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".open--modal");
const closeModalBtn = document.querySelector(".close--modal");

const links = document.querySelectorAll("a");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  openModalBtn.classList.add("hidden");
  closeModalBtn.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  openModalBtn.classList.remove("hidden");
  closeModalBtn.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
