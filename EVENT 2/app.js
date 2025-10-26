const accHeads = document.querySelectorAll(".accHead");

accHeads.forEach(head => {
  head.addEventListener("click", () => {
    const content = head.nextElementSibling;
    const symbol = head.querySelector(".symbol");

    accHeads.forEach(h => {
      if (h !== head) {
        h.classList.remove("active");
        h.nextElementSibling.style.maxHeight = null;
        h.querySelector(".symbol").textContent = "+";
      }
    });

    
    if (head.classList.contains("active")) {
      head.classList.remove("active");
      content.style.maxHeight = null;
      symbol.textContent = "+";
    } else {
      head.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      symbol.textContent = "–";
    }
  });
});