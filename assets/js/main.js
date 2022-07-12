let computer = document.querySelector(".computer");
let userBtn = document.querySelectorAll(`.user button`);
let gamePlay = true;
let output = document.querySelector(".result");
let scoreOutput = document.querySelector(".score");
let score = [0, 0, 0];

const result = {
  // 1=Rock / 2=Paper / 3=Scissor / (11=Rock/Rock (Draw))
  11: ["Draw", 2],
  12: ["Lose", 3],
  13: ["Win", 1],
  21: ["Win", 1],
  22: ["Draw", 2],
  23: ["Lose", 3],
  31: ["Lose", 3],
  32: ["Win", 1],
  33: ["Draw", 2],
};

let img = [
  "./assets/img/rock96.png",
  "./assets/img/papier64.png",
  "./assets/img/scissor64.png",
];

userBtn.forEach((userBtn, index) => {
  userBtn.addEventListener("click", () => {
    playGame(index + 1);
  });
});

let playGame = (userSelection) => {
  if (gamePlay) {
    let pcSelection = Math.floor(Math.random() * 3 + 1);
    gamePlay = false;
    score[result[String(userSelection) + String(pcSelection)][1] - 1]++;
    computer.setAttribute("src", img[pcSelection - 1]);
    output.innerText = result[String(userSelection) + String(pcSelection)][0];
    setTimeout(() => {
      gamePlay = true;
      computer.setAttribute("src", "");
      output.innerText = "Ergebnis";
      scoreOutput.innerText = `(Win: ${score[0]}) (Draw: ${score[1]}) (Lose: ${score[2]})`;
    }, 800);
  }
};
