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
