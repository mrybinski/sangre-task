import join from 'url-join';

const init = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
  mode: 'cors',
  cache: 'no-cache',
};

export default function corsFetch(url) {
  return fetch(join(SERVICE_URL, url), init)
    .then(response => response.json());
}
