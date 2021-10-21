const cssString = `
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");
body {
  margin: 0;
  font-family: "Roboto", sans-serif; }

.-Hidden {
  display: none; }

.PresizeQ {
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center; }

.Card {
  padding: 16px;
  width: 800px;
  height: 700px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333; }
  .Card__Title {
    font-size: 48px;
    font-weight: 900;
    color: #02adad; }
  .Card__Subheading {
    font-size: 20px; }

`;

module.exports = {
  cssString,
};
