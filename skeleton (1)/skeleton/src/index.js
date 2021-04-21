const View = require("./ttt-view");
const Game = require("../../../solution/game");

$(() => {
  // Your code here

  const game = new Game();
  let $cont = $(".ttt");
  const view = new View(game, $cont);
  view.bindEvents();
  const setTimer = setInterval(() => {
    if (view.game.isOver()) {
      const winnerMar = view.game.winner();
      if (!winnerMar) {
        const $h1 = $("<h1 class=message > </h1>").text(`It's a draw!`);
        $("body").append($h1);
        $("li.selected").toggleClass("loser selected gameover");
        clearInterval(setTimer);
      } else {
        const winnerSquare = $(`div:contains("${winnerMar}")`).parent();
        const loserMar = winnerMar === "x" ? "o" : "x";
        const loserSquare = $(`div:contains("${loserMar}")`).parent();
        winnerSquare.addClass("winner");
        loserSquare.addClass("loser");
        const $h1 = $("<h1 class=message > </h1>").text(
          `Winner is ${winnerMar} !`
        );
        $("body").append($h1);
        $("li.not-selected").toggleClass("gameover  not-selected");
        $("li.selected").toggleClass("gameover selected");
        clearInterval(setTimer);
      }
    }
  }, 0);
});
