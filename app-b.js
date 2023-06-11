const circelProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instruction = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// which breath number user selected/remaining

numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// grow circle

const growCircle = () => {
  circelProgress.classList.add("circle-grow");
  setTimeout(() => {
    circelProgress.classList.remove("circle-grow");
  }, 8000);
};

// start.addEventListener("click", () => {
//   growCircle();
// });

// instruction
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instruction.innerText = "Breath deeply";
  setTimeout(() => {
    instruction.innerText = "Hold your breath for 4 second";
    setTimeout(() => {
      instruction.innerText = " Now exhale your breath slowly";
    }, 4000);
  }, 4000);
};

// breathing

const breath = () => {
  const continueBreathing = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(continueBreathing);
      instruction.innerText =
        "You just completed your breath session,click 'Iam ready' to start another session.";
      start.classList.remove("btn-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;

      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// start

start.addEventListener("click", () => {
  start.classList.add("btn-inactive");
  instruction.innerText = "Find place to sit that feels calm and quiet to you.";
  setTimeout(() => {
    instruction.innerText =
      "Follow the sensation of your breath as it goes in and as it goes out.";
    setTimeout(() => {
      breath();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 3000);
});
