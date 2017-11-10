const headers = new Headers();

const init = {
  method: 'GET',
  headers,
  mode: 'cors',
  cache: 'no-cache',
};

export default function corsFetch(url) {
  return fetch(url, init);
}
