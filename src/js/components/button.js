const {
  addBodyDiv,
  waitForElement,
  addListener,
  addStyles,
} = require("../util");

const appendButton = () => {
  const htmlString = `
    <div class="PresizeQ__Button">
      <span class="material-icons">checkroom</span> Try on
    </div>
  `;
  const className = "PresizeQ__ButtonWrapper";
  addBodyDiv(htmlString, className, true);
  addListener(`.${className}`, popupClickHandler);
};

const popupClickHandler = (e) => {
  e.preventDefault();
  const popUpClass = "PresizeQ__Wrapper";
  const popUp = document.querySelector(`.${popUpClass}`);

  let isHidden = popUp.classList.contains("-Hidden");

  if (isHidden) {
    document.body.classList.add("-NoScroll");
    popUp.classList.remove("-Hidden");
  } else {
    document.body.classList.remove("-NoScroll");
    popUp.classList.add("-Hidden");
  }
};

module.exports = {
  appendButton,
  popupClickHandler,
};
