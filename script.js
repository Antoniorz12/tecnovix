document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible-" + entry.target.dataset.anim);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".invisible").forEach(el => observer.observe(el));

  document.querySelectorAll(".menu a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelectorAll(".menu a").forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
  });
});
