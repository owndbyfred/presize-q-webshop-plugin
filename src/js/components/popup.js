const { addBodyDiv, addListener } = require("../util");
const { popupClickHandler } = require("./button");

const appendPopup = () => {
  const htmlString = `
    <div class="PresizeQ__Wrapper -Hidden">
        <div class="PresizeQ"> 
            <div class="Card">
                <div class="Card__Close">
                    <span class="material-icons Card__CloseIcon">
                        close
                    </span>
                </div>
                <div class="Card__Title">Presize-Q</div>
                <div class="Card__Subheading">Jetzt neue Klamotten entdecken!</div>
                <div class="ImageSection">
                    <div class="DummyImage"></div>
                </div>
                <div class="ReactionSection">
                    <div class="Reaction__No"></div>
                    <div class="Reaction__Yes"></div>
                </div>
                <div class="BuyNow">
                    <a href="#" class="BuyNow__Button">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
    `;
  addBodyDiv(htmlString, "PresizeQ__PopUp");
  addListener(".Card__Close", popupClickHandler);
};

module.exports = {
  appendPopup,
};
