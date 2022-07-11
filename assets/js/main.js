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

let playGame = (userSelection) => {
  let pcSelection = Math.floor(Math.random() * 3 + 1);
  document.querySelector("main div:nth-of-type(2)").innerHTML =
    "<h2>" + result[`${String(userSelection)}${String(pcSelection)}`] + "</h2>";
};
