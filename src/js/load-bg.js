import bgOneX from '../img/mobile/hero-mobile.png';
import bgTwoX from '../img/mobile/hero-mobile@2x.png';

async function loadBackgroundImage1x(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

async function loadBackgroundImage2x(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

document.addEventListener('DOMContentLoaded', loadBg);
async function loadBg() {
  try {
    let backgroundImageURL;
    if (
      window.matchMedia &&
      window.matchMedia('(min-resolution: 192dpi)').matches
    ) {
      backgroundImageURL = bgTwoX; // Використовуємо зображення з високим розширенням
      await loadBackgroundImage2x(backgroundImageURL);
    } else {
      backgroundImageURL = bgOneX; // Використовуємо зображення зі звичайним розширенням
      await loadBackgroundImage1x(backgroundImageURL);
    }
    const heroBg = document.querySelector('.hero-bg');
    heroBg.style.backgroundImage = `url('${backgroundImageURL}')`;
  } catch (error) {
    console.error(error);
  }
}
