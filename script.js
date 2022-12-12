const buttonBtn = document.querySelector(".button");
const closeBtn = document.querySelector(".close");

buttonBtn.addEventListener("click", function () {
  const modalFlex = document.querySelector(".pop-modal");
  modalFlex.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  const modalNone = document.querySelector(".pop-modal");
  modalNone.style.display = "none";
});
