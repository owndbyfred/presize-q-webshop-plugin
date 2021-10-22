const { addBodyDiv, addListener } = require("../util");
const { popupClickHandler } = require("./button");
const { imageList, imagesHtml, imageButtonHandler } = require("./images");

const appendPopup = () => {
  //let imagesHtml = `<img src="${imageList[0]}" class="SwipeImage"/>`;

  const htmlString = `
    <div class="PresizeQ__Wrapper -Hidden">
        <div class="PresizeQ"> 
            <div class="Card">
                <div class="Card__Close">
                    <span class="material-icons Card__CloseIcon">
                        close
                    </span>
                </div>
                <div class="StartPage">
                    <div class="Card__Title">Presize-Q</div>
                    <div class="Card__Subheading">Try on our new collection!</div>
                    <a class="CustomizeButton">Upload scan</a>
                    <a class="StartButton">Start</a>
                </div>
                <div class="MainPage -Hidden">
                    <div class="Settings"><span class="material-icons">settings</span></div>
                    <select class="CollectionDropdown">
                        <option>
                            Summer Collection 
                        </option>
                        <option>
                            Nightlife Collection 
                        </option>
                    </select>
                    <div class="ImageSection" data-current="0">
                        ${imagesHtml}
                    </div>
                    <div class="ReactionSection">
                        <div class="Reaction__No">
                            <span class="material-icons -LargeIcon">not_interested</span>
                        </div>
                        <div class="Reaction__Yes">
                            <span class="material-icons -LargeIcon">favorite_border</span>
                        </div>
                    </div>
                    <div class="BuyNow">
                        <a href="#" class="BuyNow__Button">
                            <span class="material-icons">shopping_cart</span>
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  addBodyDiv(htmlString, "PresizeQ__PopUp");
  addListener(".Card__Close", popupClickHandler);
  addListener(".Card__Close", returnToStartHandler);
  addListener(".Reaction__Yes", imageButtonHandler);
  addListener(".Reaction__No", imageButtonHandler);
  addListener(".StartButton", startHandler);
};

const startHandler = (e) => {
  document.querySelector(".StartPage").classList.add("-Hidden");
  document.querySelector(".MainPage").classList.remove("-Hidden");
};

const returnToStartHandler = (e) => {
  document.querySelector(".StartPage").classList.remove("-Hidden");
  document.querySelector(".MainPage").classList.add("-Hidden");
};

module.exports = {
  appendPopup,
};
