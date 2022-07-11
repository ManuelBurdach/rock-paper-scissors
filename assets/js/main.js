document
  .querySelector(".user button:nth-of-type(1)")
  .addEventListener("click", () => {
    playGame(1);
  });

document
  .querySelector(".user button:nth-of-type(2)")
  .addEventListener("click", () => {
    playGame(2);
  });

document
  .querySelector(".user button:nth-of-type(3)")
  .addEventListener("click", () => {
    playGame(3);
  });

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

let computerBtn = document.querySelectorAll(`.computer button`);
let userBtn = document.querySelectorAll(`.user button`);
let gamePlay = true;

let clearBoth = () => {
  computerBtn.forEach((btn) => {
    btn.style.backgroundColor = "transparent";
  });
  userBtn.forEach((btn) => {
    btn.style.backgroundColor = "transparent";
  });
  gamePlay = true;
};

let playGame = (userSelection) => {
  if (gamePlay) {
    gamePlay = false;
    let pcSelection = Math.floor(Math.random() * 3 + 1);
    document.querySelector(
      `.computer button:nth-of-type(${pcSelection})`
    ).style.backgroundColor = "red";
    document.querySelector(
      `.user button:nth-of-type(${userSelection})`
    ).style.backgroundColor = "red";
    document.querySelector("main div:nth-of-type(2)").innerHTML =
      "<h2>" +
      result[`${String(userSelection)}${String(pcSelection)}`] +
      "</h2>";
    setTimeout(() => {
      clearBoth();
    }, 1000);
  }
};
