function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(async (element) => {
      const file = element.getAttribute('include-html');
      try {
          const response = await fetch(file);
          if (response.ok) {
              const text = await response.text();
              element.innerHTML = text;
              element.removeAttribute('include-html');
              includeHTML(); // ネストされたインクルードのために再帰的に呼び出し
          } else {
              element.innerHTML = 'Page not found.';
          }
      } catch (error) {
          element.innerHTML = 'Error loading page.';
      }
  });
}

function addVisibilityClassOnScroll() {
  const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-bottom');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  const elements = document.querySelectorAll('.js-fade-in');
  elements.forEach(element => {
      observer.observe(element);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML();
  addVisibilityClassOnScroll();
});
