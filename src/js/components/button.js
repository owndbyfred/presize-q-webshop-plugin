const {
  addBodyDiv,
  waitForElement,
  addListener,
  addStyles,
} = require("../util");

const appendButton = () => {
  const htmlString = `
    <div class="PresizeQ__Button">
      Try on!
    </div>
  `;
  const className = "PresizeQ__ButtonWrapper";
  addBodyDiv(htmlString, className, true);
  addListener(`.${className}`, buttonClickHandler);
};

const buttonClickHandler = (e) => {
  e.preventDefault();
  const popUpClass = "PresizeQ__Wrapper";
  const popUp = document.querySelector(`.${popUpClass}`);

  let isHidden = popUp.classList.contains("-Hidden");

  if (isHidden) {
    document.body.classList.add("-NoScroll");
    popUp.classList.remove("-Hidden");
  }
};

module.exports = {
  appendButton,
};
