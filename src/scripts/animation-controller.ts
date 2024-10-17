const defaultAnimationClassName = 'fade-in-up--paused';
const startAnimationClassName = 'fade-in-up--running';
const targets = document.querySelectorAll('.' + defaultAnimationClassName);

const observerOptions: IntersectionObserverInit = {
  root: null, // Use the viewport as the container
  rootMargin: '0px',
  threshold: 0.1, // Trigger when 10% of the target is visible
};

const observerCallback: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace(
        defaultAnimationClassName,
        startAnimationClassName
      );
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
export function runAnimation() {
  if (targets[0]) {
    targets.forEach((target) => {
      observer.observe(target);
    });
  }
}
