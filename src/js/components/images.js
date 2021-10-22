const axios = require("axios");

const fetchImage = () => {
  axios
    .post("http://88.217.174.107:5020/run_vton", {
      direct_image_input: 0,
      size_id: "mmrq",
      garment_url: [
        "https://storage.googleapis.com/presize-vton-v2/garments/000011_1.jpg",
      ],
      obfuscate: 1,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = { fetchImage };
