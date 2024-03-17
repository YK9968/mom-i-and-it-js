import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function getSlider(element, props) {
  const slider = new Swiper(element, props);
}
