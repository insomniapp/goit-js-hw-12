export function getImages(query) {
  const baseUrl = 'https://pixabay.com/api/';
  const keyApi = '14743276-cc510ebd2c33a29df59733b33';

  const queryParams = new URLSearchParams({
    key: keyApi,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 30,
  });

  return fetch(`${baseUrl}?${queryParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}