const select = document.getElementById("electronicsSelect");
const items = document.querySelectorAll(".col-md-3");

select.addEventListener("change", function () {
  const selectedCategory = this.value;

  items.forEach(item => {
    if (selectedCategory === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(selectedCategory)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
