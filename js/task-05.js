const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function(event) {
  const newName = event.target.value.trim();
  nameOutput.textContent = newName || "Anonymous";
}); 