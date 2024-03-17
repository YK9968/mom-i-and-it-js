// function controlsTheAnimation() {
//   const coversGallery = document.querySelector('.covers-content');
//   const coversAnimation = document.querySelectorAll('.covers-marquee-line');
//   const rect = coversGallery.getBoundingClientRect();
//   const viewportHeight = window.innerHeight;
//   const visibleHeight =
//     Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
//   if (visibleHeight / viewportHeight >= 0.2) {
//     if (!coversAnimation.classList.contains('animation')) {
//       coversAnimation.classList.add('animation');
//       console.log(coversAnimation.classList);
//     }
//     coversAnimation.style.animationPlayState = 'running';
//   } else {
//     if (coversAnimation.classList.contains('animation')) {
//       coversAnimation.classList.remove('animation');
//       console.log(coversAnimation.classList);
//     }
//     coversAnimation.style.animationPlayState = 'paused';
//   }
// }
// window.addEventListener('scroll', controlsTheAnimation);
function controlsTheAnimation() {
  const coversGalleries = document.querySelectorAll('.covers-content');
  coversGalleries.forEach(coversGallery => {
    const coversAnimations = coversGallery.querySelectorAll(
      '.covers-marquee-line'
    );
    const rect = coversGallery.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    coversAnimations.forEach(coversAnimation => {
      if (visibleHeight / viewportHeight >= 0.2) {
        coversAnimation.style.animationPlayState = 'running';
      } else {
        coversAnimation.style.animationPlayState = 'paused';
      }
    });
  });
}
window.addEventListener('scroll', controlsTheAnimation);
