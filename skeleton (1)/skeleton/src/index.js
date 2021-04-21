const View = require("./ttt-view");
const Game = require("../../../solution/game");

$(() => {
  // Your code here

  const game = new Game();
  let $cont = $(".ttt");
  const view = new View(game, $cont);
  view.bindEvents();
});
