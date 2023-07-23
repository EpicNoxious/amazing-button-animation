function splitButtonText() {
  const buttons = document.querySelectorAll(".btn-text");

  buttons.forEach((button) => {
    const buttonText = button.textContent;
    console.log(buttonText);
    button.textContent = "";

    const characters = buttonText.split("");

    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      button.appendChild(span);
      span.style.animationDelay = `${index * 0.01}s`;
    });
  });
}
window.addEventListener("load", splitButtonText);






















