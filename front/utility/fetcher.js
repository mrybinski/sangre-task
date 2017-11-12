const init = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
  mode: 'cors',
  cache: 'no-cache',
};

export default function corsFetch(url) {
  return fetch(url, init)
    .then(response => response.json());
}
