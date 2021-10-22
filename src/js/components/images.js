const imageList = [
  "http://i.imgur.com/hkPh9tR.jpg",
  "https://i.imgur.com/A90bCyd.jpg",
  "https://i.imgur.com/hSJABc4.jpg",
  "https://i.imgur.com/4pYPzby.jpg",
  "https://i.imgur.com/TvLK0uL.jpg",
  "https://i.imgur.com/PlIdi0z.jpg",
  "https://i.imgur.com/S8SnENg.jpg",
  "https://i.imgur.com/fhFlhwU.jpg",
  "https://i.imgur.com/1XzpnlR.jpg",
  "https://i.imgur.com/OjcG8uP.jpg",
];

const imagesHtml = `
<img src="https://i.ibb.co/M6fyY7J/5l4dy5o3j1zn3e42y52lspa3ed-211020-125439.jpg" class="SwipeImage" data-index="0">
<img src="https://i.ibb.co/Wvj3y56/58bm68397705c84r0frpmec1wg-211020-125411.jpg" class="SwipeImage -Hidden" data-index="1">
<img src="https://i.ibb.co/Fm0QCbn/451iohkn1kv5j6h8f5yuajy8n3-211020-124641.jpg" class="SwipeImage -Hidden" data-index="2">
<img src="https://i.ibb.co/njZNcYq/adrbarc0yeu5a42ed5luvk2i6i-211020-125711.jpg" class="SwipeImage -Hidden" data-index="3">
<img src="https://i.ibb.co/JnHk16h/bf455m5qh9cxp07hrm621tcl40-211020-124958.jpg" class="SwipeImage -Hidden" data-index="4">
<img src="https://i.ibb.co/QHP1jfh/cftoqvetdv9b1oga01iof2iz1h-211020-124830.jpg" class="SwipeImage -Hidden" data-index="5">
<img src="https://i.ibb.co/PNTgXCD/deejpbk1scqyfr2vpkl9b8q5qr-211020-094117.jpg" class="SwipeImage -Hidden" data-index="6">
<img src="https://i.ibb.co/6N0n0X9/orw7i0xavdvy91pf7w2e9dkgd3-211020-093733.jpg" class="SwipeImage -Hidden" data-index="7">
<img src="https://i.ibb.co/9W48Y8F/vaal8n913xuqcqyf3qjf4yugpe-211020-125510.jpg" class="SwipeImage -Hidden" data-index="8">
<img src="https://i.ibb.co/cJhgNpB/ybfjea3b88awnhjr3r1i09r995-211020-124735.jpg" class="SwipeImage -Hidden" data-index="9">`;

const imageButtonHandler = (e) => {
  const imageSection = document.querySelector(".ImageSection");
  const currentIndex = parseInt(imageSection.getAttribute("data-current"));

  const currentImg = document.querySelector(
    `.SwipeImage[data-index="${currentIndex}"]`
  );
  if (currentImg) {
    currentImg.classList.add("-Hidden");
    let newIndex = currentIndex + 1;

    if (newIndex > 9) {
      newIndex = 0;
    }

    const newImg = document.querySelector(
      `.SwipeImage[data-index="${newIndex}"]`
    );
    if (newImg) {
      newImg.classList.remove("-Hidden");
      imageSection.setAttribute("data-current", newIndex);
    }
  }
};
module.exports = {
  imageList,
  imagesHtml,
  imageButtonHandler,
};
