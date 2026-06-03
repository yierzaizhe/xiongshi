const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

document.addEventListener("pointermove", (event) => {
  const x = Math.round((event.clientX / window.innerWidth) * 100);
  const y = Math.round((event.clientY / window.innerHeight) * 100);
  document.body.style.background = `
    radial-gradient(circle at ${x}% ${y}%, rgba(53, 242, 138, 0.18), transparent 24rem),
    radial-gradient(circle at 90% 22%, rgba(104, 216, 255, 0.14), transparent 26rem),
    linear-gradient(180deg, #05070a 0%, #080d12 44%, #030405 100%)
  `;
});
