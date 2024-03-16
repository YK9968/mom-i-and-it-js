import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.about-list', {
  duration: 400,
  showMultiple: true,
  beforeOpen: function (currentElement) {
    console.log(currentElement);
  },
  beforeClose: function (currentElement) {
    console.log(currentElement);
  },
});

accordion.open(0);
