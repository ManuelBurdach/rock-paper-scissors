let computerBtn = document.querySelectorAll(`.computer button`);
let userBtn = document.querySelectorAll(`.user button`);
let gamePlay = true;
let output = document.querySelector(".result");

const result = {
  11: "Draw",
  12: "Lose",
  13: "Win",
  21: "Win",
  22: "Draw",
  23: "Lose",
  31: "Lose",
  32: "Win",
  33: "Draw",
};

userBtn.forEach((userBtn, index) => {
  userBtn.addEventListener("click", () => {
    playGame(index + 1);
  });
});

let clearBoth = () => {
  computerBtn.forEach((btn, index) => {
    btn.style.backgroundColor = "transparent";
    userBtn[index].style.backgroundColor = "transparent";
  });
  gamePlay = true;
};

let playGame = (userSelection) => {
  if (gamePlay) {
    let pcSelection = Math.floor(Math.random() * 3 + 1);
    gamePlay = false;
    computerBtn[pcSelection - 1].style.backgroundColor = "red";
    userBtn[userSelection - 1].style.backgroundColor = "red";
    output.innerHTML = result[String(userSelection) + String(pcSelection)];
    setTimeout(() => {
      clearBoth();
    }, 250);
  }
};
