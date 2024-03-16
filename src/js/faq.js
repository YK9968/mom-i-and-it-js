import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', accordeonOpenClose);

function accordeonOpenClose() {
  new Accordion('.faq-column', {
    duration: 200,
    showMultiple: true,
    onOpen: currentElement => {
      const arrow = currentElement.querySelector('.faq-arrow-img');
      arrow.style.transition = 'transform 0.5s';
      arrow.style.transform = 'rotate(180deg)';
    },
    onClose: currentElement => {
      const arrow = currentElement.querySelector('.faq-arrow-img');
      arrow.style.transition = 'transform 0.5s';
      arrow.style.transform = 'rotate(0deg)';
    },
  });
}

// function initializeAccordion() {
//   const accButtons = document.querySelectorAll('.accordeon-button');

//   accButtons.forEach(function (button) {
//     button.addEventListener('click', toggleAccordionPane);
//     function toggleAccordionPane() {
//       const panel = this.parentElement.nextElementSibling;
//       const arrow = this.querySelector('.faq-arrow-img');

//       panel.classList.toggle('show');

//       if (panel.classList.contains('show')) {
//         arrow.style.transition = 'transform 0.5s';
//         arrow.style.transform = 'rotate(180deg)';
//       } else {
//         arrow.style.transition = 'transform 0.5s';
//         arrow.style.transform = 'rotate(0deg)';
//       }
//     }
//   });
// }
