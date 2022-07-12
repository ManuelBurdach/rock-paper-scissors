let computer = document.querySelector(".computer");
let userBtn = document.querySelectorAll(`.user button`);
let gamePlay = true;
let output = document.querySelector(".result");

const result = {
  // 1=Rock / 2=Paper / 3=Scissor / (11=Rock/Rock (Draw))
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
    // userBtn[userSelection - 1].style.backgroundColor = "red";
    computer.setAttribute("src", img[pcSelection - 1]);
    output.innerText = result[String(userSelection) + String(pcSelection)];
    setTimeout(() => {
      gamePlay = true;
      computer.setAttribute("src", "");
      output.innerText = "Ergebnis";
    }, 800);
  }
};

//                ALT !!!!!!!!!!!!!!!!!!
// let computerBtn = document.querySelectorAll(`.computer button`);
// let userBtn = document.querySelectorAll(`.user button`);
// let gamePlay = true;
// let output = document.querySelector(".result");

// const result = {
//   11: "Draw",
//   12: "Lose",
//   13: "Win",
//   21: "Win",
//   22: "Draw",
//   23: "Lose",
//   31: "Lose",
//   32: "Win",
//   33: "Draw",
// };

// userBtn.forEach((userBtn, index) => {
//   userBtn.addEventListener("click", () => {
//     playGame(index + 1);
//   });
// });

// let clearBoth = () => {
//   computerBtn.forEach((btn, index) => {
//     btn.style.backgroundColor = "transparent";
//     userBtn[index].style.backgroundColor = "transparent";
//   });
//   gamePlay = true;
// };

// let playGame = (userSelection) => {
//   if (gamePlay) {
//     let pcSelection = Math.floor(Math.random() * 3 + 1);
//     gamePlay = false;
//     computerBtn[pcSelection - 1].style.backgroundColor = "red";
//     userBtn[userSelection - 1].style.backgroundColor = "red";
//     output.innerHTML = result[String(userSelection) + String(pcSelection)];
//     setTimeout(() => {
//       clearBoth();
//     }, 250);
//   }
// };
