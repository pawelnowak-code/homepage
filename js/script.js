{
    const onClickChangeMainHeader = () => {
        const nextColor = document.querySelector(".js-nextColor");
        const mainHeaderText = document.querySelector(".js-mainHeaderText");
        mainHeaderText.classList.toggle("mainHeader__text--dark");
        nextColor.innerText = mainHeaderText.classList.contains("mainHeader__text--dark") ? 'blue' : 'gray';
    };

    const init = () => {
        const changeColorButton = document.querySelector(".js-changeColorButton");
        changeColorButton.addEventListener("click", onClickChangeMainHeader);
    };

    init();
}