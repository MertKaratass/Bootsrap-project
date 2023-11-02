const faDesktop = document.querySelector(".fa-desktop");
const descopt = document.querySelector(".descopt");

faDesktop.addEventListener("click", (event) => {
  if (descopt.style.display === "none") {
    descopt.style.display = "block";
    descopt.classList.add("active");
  } else {
    descopt.style.display = "none";
    descopt.classList.remove("active");
  }
  event.stopPropagation(); // Prevent the click event from propagating
});

document.addEventListener("click", (event) => {
  if (!faDesktop.contains(event.target) && event.target !== descopt) {
    descopt.style.display = "none";
    descopt.classList.remove("active");
  }
});

descopt.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from propagating
});
