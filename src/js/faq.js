import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-column', {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const accButtons = document.querySelectorAll('.accordeon-button');

  accButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const panel = this.parentElement.nextElementSibling;
      const arrow = this.querySelector('.faq-arrow-img');

      panel.classList.toggle('show');

      if (panel.classList.contains('show')) {
        arrow.style.transition = 'transform 0.5s';
        arrow.style.transform = 'rotate(180deg)';
      } else {
        arrow.style.transition = 'transform 0.5s';
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });
});
