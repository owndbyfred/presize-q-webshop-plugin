const { addBodyDiv, waitForElement, addListener } = require("../util");

const appendButton = () => {
  const htmlString = `
    <div class="PresizeQ__Button">
      Try on!
    </div>
  `;
  const className = "PresizeQ__ButtonWrapper";
  addBodyDiv(htmlString, className);
  addListener(`.${className}`, buttonClickHandler);
};

const buttonClickHandler = (e) => {
  e.preventDefault();
  const popUpClass = "PresizeQ__Wrapper";
  const popUp = document.querySelector(`.${popUpClass}`);

  let isHidden = popUp.classList.contains("-Hidden");

  if (isHidden) {
    popUp.classList.remove("-Hidden");
  }
};

module.exports = {
  appendButton,
};
