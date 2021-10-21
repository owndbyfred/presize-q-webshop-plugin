const { addBodyDiv } = require("../util");

const appendPopup = () => {
  const htmlString = `
    <div class="PresizeQ__Wrapper -Hidden">
        <div class="PresizeQ">
            <div class="Card">
            <div class="Card__Title">Presize-Q</div>
            <div class="Card__Subheading">Jetzt neue Klamotten entdecken!</div>
            <div class="BuyNow">
                <a href="#" class="BuyNow__Button">Buy Now</a>
                <img src="https://link.com/zum/bild.png" alt="" />
            </div>
            </div>
        </div>
    </div>
    `;
  addBodyDiv(htmlString, "PresizeQ__PopUp");
};

module.exports = {
  appendPopup,
};
