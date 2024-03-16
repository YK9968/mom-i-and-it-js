import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', accordeonOpenClose);

function accordeonOpenClose() {
  new Accordion('.faq-column', {
    duration: 500,
    showMultiple: true,
    beforeOpen: currentElement => {
      const arrow = currentElement.querySelector('.faq-arrow-img');
      arrow.style.transition = 'transform 0.5s';
      arrow.style.transform = 'rotate(180deg)';
    },
    beforeClose: currentElement => {
      const arrow = currentElement.querySelector('.faq-arrow-img');
      arrow.style.transition = 'transform 0.5s';
      arrow.style.transform = 'rotate(0deg)';
    },
  });
}
