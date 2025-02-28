let changeColorButton = document.querySelector(".js-changeColorButton");
let mainHeaderText = document.querySelector(".js-mainHeaderText");
let nextColor = document.querySelector(".js-nextColor");

changeColorButton.addEventListener("click", () => {
    mainHeaderText.classList.toggle("mainHeader__text--dark");
    nextColor.innerText = mainHeaderText.classList.contains("mainHeader__text--dark") ?  'blue' : 'gray'
});