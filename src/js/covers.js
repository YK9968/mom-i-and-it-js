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
