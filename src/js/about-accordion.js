import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.about-list', {
  duration: 400,
  showMultiple: true,
  beforeOpen: currentElement => {
    const arrow = currentElement.querySelector('.about-btn-icon');
    arrow.style.transition = 'transform 0.5s';
    arrow.style.transform = 'rotate(180deg)';
  },
  beforeClose: currentElement => {
    const arrow = currentElement.querySelector('.about-btn-icon');
    arrow.style.transition = 'transform 0.5s';
    arrow.style.transform = 'rotate(0deg)';
  },
});

accordion.open(0);
