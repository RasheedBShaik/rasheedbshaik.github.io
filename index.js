const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      console.log(
        "Observed:",
        entry.target,
        "isIntersecting:",
        entry.isIntersecting,
      );
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
// logo rotation
document.querySelectorAll(".navContent").forEach((link) => {
  link.addEventListener("click", () => {
    logo.classList.remove("rotate");
    void logo.offsetWidth;
    logo.classList.add("rotate");
  });
});
const logo = document.querySelector(".logo");
// logo rotation for mobile
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  logo.classList.remove("rotate"); // Reset if already applied
  void logo.offsetWidth; // Force reflow to restart animation
  logo.classList.add("rotate");
});
