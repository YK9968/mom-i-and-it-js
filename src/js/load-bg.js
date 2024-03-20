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
      backgroundImageURL = '/img/mobile/hero-mobile@2x.png';
      const backgroundImage = await loadBackgroundImage2x(backgroundImageURL);
      const heroBg = document.querySelector('.hero-bg');
      heroBg.style.backgroundImage = `url('${backgroundImage.src}')`;
    } else {
      backgroundImageURL = '/img/mobile/hero-mobile.png';
      const backgroundImage = await loadBackgroundImage1x(backgroundImageURL);
      const heroBg = document.querySelector('.hero-bg');
      heroBg.style.backgroundImage = `url('${backgroundImage.src}')`;
    }
  } catch (error) {
    console.error(error);
  }
}
