// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollectionRef = collection(db, "users");
console.log(usersCollectionRef);

const getUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  data.docs.map((doc) => {
    console.log(doc.data().username);
  });
};
getUsers();

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
