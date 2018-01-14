function inizializeHomeAnimation() {
  setTimeout(function() {
    var flower = new Vivus(
      "flower",
      { duration: 200, file: "./images/flower.svg" },
      function() {}
    );
  }, 20);
}
