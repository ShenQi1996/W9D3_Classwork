class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    var html =
      '<ul class = "board">' +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "<li> </li>" +
      "</ul>";
    $(document.body).append(html);
  }
}

module.exports = View;
