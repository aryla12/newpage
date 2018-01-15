function inizializeHomeAnimation() {
  setTimeout(function() {
    var flower = new Vivus(
      "flower",
      { type: "oneByOne", duration: 150, file: "./images/flower.svg" },
      function() {}
    );
  }, 20);
}
