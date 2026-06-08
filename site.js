document.addEventListener("click", (event) => {
  const toggler = event.target.closest("[data-mobile-nav-toggle]");
  if (!toggler) {
    return;
  }

  const targetSelector = toggler.getAttribute("data-bs-target");
  const target = targetSelector ? document.querySelector(targetSelector) : null;
  if (!target) {
    return;
  }

  const isOpen = target.classList.toggle("show");
  toggler.setAttribute("aria-expanded", String(isOpen));
});
