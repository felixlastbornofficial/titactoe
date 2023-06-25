let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(cellIndex) {
  if (board[cellIndex] === "") {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].style.cursor = "default";
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + " wins!");
      resetGame();
    } else if (board.every(cell => cell !== "")) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    return combo.every(cellIndex => board[cellIndex] === player);
  });
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  Array.from(document.getElementsByClassName("cell")).forEach(cell => {
    cell.innerText = "";
    cell.style.cursor = "pointer";
  });
}
