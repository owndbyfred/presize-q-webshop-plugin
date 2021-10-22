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
                <div class="Settings"><span class="material-icons">settings</span></div>
                <div class="Card__Title">Presize-Q</div>
                <select class="CollectionDropdown">
                    <option>
                        Summer Collection 
                    </option>
                    <option>
                        Nightlife Collection 
                    </option>
                </select>
                <div class="ImageSection">
                    <div class="DummyImage"></div>
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
    `;
  addBodyDiv(htmlString, "PresizeQ__PopUp");
  addListener(".Card__Close", popupClickHandler);
};

module.exports = {
  appendPopup,
};
