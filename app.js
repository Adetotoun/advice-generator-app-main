const api = "https://api.adviceslip.com/advice"

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const diceBtn = document.querySelector(".dice-btn");

async function getAdvice() {
  try {
    const response = await fetch(api);

    const data = await response.json();

    console.log(data);

    const advice = data.slip.advice;
    const id = data.slip.id;

    adviceId.textContent = `ADVICE #${id}`;
    adviceText.textContent = `“${advice}”`;
  } catch (error) {
    adviceText.textContent = "Oops! Something went wrong. Try again.";
    console.error("Error fetching advice:", error);
  }
}

// Generate advice on button click
diceBtn.addEventListener("click", getAdvice);

// Load advice on page load
getAdvice();
