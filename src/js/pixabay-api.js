import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyApi = '14743276-cc510ebd2c33a29df59733b33';

export async function getImages(query, perPage, pageNum) {
  const queryParams = new URLSearchParams({
    key: keyApi,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: pageNum,
  });

  const response = await axios.get('', { params: queryParams });
  return response.data;
}