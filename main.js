const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("click", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  let newTop, newLeft;
  do {
    newTop = getRandomNumber(0, containerRect.height - btnRect.height);
    newLeft = getRandomNumber(0, containerRect.width - btnRect.width);
  } while (
    Math.abs(newTop - btnRect.top) < containerRect.height / 3 ||
    Math.abs(newLeft - btnRect.left) < containerRect.width / 3
  );

  btnNo.style.position = "absolute";
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
});

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
