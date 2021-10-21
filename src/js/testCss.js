let cssString = `
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.-Hidden {
  display: none; }

.-NoScroll {
  overflow: hidden; }

.PresizeQ {
  font-family: "Roboto", sans-serif;
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
  .PresizeQ__Wrapper {
    z-index: 99999;
    position: absolute;
    top: 0;
    left: 0; }

.Card {
  padding: 16px;
  width: 800px;
  height: 700px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  position: relative; }
  .Card__Close {
    position: absolute;
    top: -20px;
    right: -30px;
    background-color: #fff;
    color: #333;
    border: #333 solid 2px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px; }
    .Card__Close:hover {
      cursor: pointer;
      color: #383838;
      background-color: #e6e6e6;
      border-color: #383838; }
  .Card__Title {
    font-size: 48px;
    font-weight: 900;
    color: #02adad; }
  .Card__Subheading {
    font-size: 20px; }

.PresizeQ__Button {
  color: white;
  background-color: #02adad;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding: 16px 32px;
  width: max-content;
  margin: 8px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center; }
  .PresizeQ__Button > * {
    margin-right: 4px; }
  .PresizeQ__Button:hover {
    background-color: #02bcbc;
    cursor: pointer; }
`;

//REMOVE FOR PRODUCTION
//cssString = "";

module.exports = {
  cssString,
};
