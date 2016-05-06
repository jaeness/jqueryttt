$(document).ready(function() {

    var turn = "X";

  // set up click events on each space of the tictactoe board
  $(document).on("click", ".game-space", function() {
    // Make sure spot is empty before continuing
    if ($(this).html() === "") {
    // change inner HTML of element we just clicked on.  then change "X" to "turn"
    $(this).html(turn);

    // Change turn based on state of "turn" variable
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }

  }

});

});
