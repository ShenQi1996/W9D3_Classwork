class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    let that = this;
    $(".board").on("click", "li.not-selected", function (e) {
      const $square = $(e.target);
      that.makeMove($square);
    });

    $(".board").on("click", "li.selected", function (e) {
      alert("invalid moves please select another square");
    });
  }

  makeMove($square) {
    $square.toggleClass("selected not-selected");
    $square.append(`<div> ${this.game.currentPlayer} </div>`);
    console.log($square.data("pos"));
    const pos = $square.attr("id").split("");
    this.game.playMove(pos);
  }

  setupBoard() {
    var html =
      '<ul class = "board">' +
      "<li class=not-selected id=00> </li>" +
      "<li class=not-selected id=01> </li>" +
      "<li class=not-selected id=02> </li>" +
      "<li class=not-selected id=10> </li>" +
      "<li class=not-selected id=11> </li>" +
      "<li class=not-selected id=12> </li>" +
      "<li class=not-selected id=20> </li>" +
      "<li class=not-selected id=21> </li>" +
      "<li class=not-selected id=22> </li>" +
      "</ul>";
    $(document.body).append(html);
  }
}

module.exports = View;
