import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const GET_URL = '/reviews';

export async function getReviews() {
  const { data } = await axios.get(`${BASE_URL}${GET_URL}`);
  return data;
}
