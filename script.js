const counters = document.querySelectorAll('.counter-number');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const step = target / 150;

  const update = () => {
    const current = +counter.innerText;
    if (current < target) {
      counter.innerText = Math.ceil(current + step);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});