let cssString = `
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.-Hidden {
  display: none !important; }

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
  width: 85%;
  height: max-content;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  position: relative;
  margin-bottom: 5%;
  margin-top: 12%; }
  .Card__Close {
    position: absolute;
    top: -5%;
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
    color: #3d52b9;
    margin-top: 10px; }
  .Card__Subheading {
    font-size: 20px;
    margin-bottom: 20px; }

.PresizeQ__Button {
  color: white;
  background-color: #3d52b9;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center; }
  .PresizeQ__Button > * {
    margin-right: 4px; }
  .PresizeQ__Button:hover {
    background-color: #4459c1;
    cursor: pointer; }

.ImageSection {
  width: 100%;
  height: 60%; }

.DummyImage {
  width: 100%;
  height: 40vh;
  background-color: gray; }

.ReactionSection {
  display: flex;
  margin: 10px 0; }
  .ReactionSection > * {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: solid #333 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    padding: 12px; }
  .ReactionSection .Reaction__No {
    color: #fff;
    background-color: #e04b59; }
  .ReactionSection .Reaction__Yes {
    color: #fff;
    background-color: #2dbc4e; }

.-LargeIcon {
  font-size: 40px; }

.BuyNow {
  margin-top: auto;
  width: 100%; }
  .BuyNow__Button {
    text-decoration: none;
    color: white;
    background-color: #3d52b9;
    padding: 20px 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 4px; }
    .BuyNow__Button .material-icons {
      margin-right: 10px; }

.CollectionDropdown {
  font-size: 18px;
  border-radius: 4px;
  border: #666 solid 2px;
  padding: 4px 0;
  width: 100%;
  text-align: center;
  margin: 10px 0; }
  .CollectionDropdown:focus {
    outline: 0; }

.Settings {
  align-self: flex-start; }
  .Settings .material-icons {
    font-size: 30px; }

.ImageSection {
  display: flex;
  align-items: center;
  justify-content: center; }

.StartPage {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%; }
  .StartPage > a {
    width: 100%;
    font-size: 20px;
    border-radius: 4px;
    margin: 8px 0;
    padding: 16px 0;
    font-weight: 700;
    border: #3d52b9 solid 3px; }
  .StartPage .StartButton {
    background-color: #3d52b9;
    color: white; }
  .StartPage .CustomizeButton {
    color: #3d52b9; }

.MainPage {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; }

`;

//REMOVE FOR PRODUCTION
//cssString = "";

module.exports = {
  cssString,
};
