function expandUnit(radio) {
  document.querySelectorAll(".unit").forEach(unit => {
    unit.classList.remove("expanded");
  });
  radio.closest(".unit").classList.add("expanded");
}
