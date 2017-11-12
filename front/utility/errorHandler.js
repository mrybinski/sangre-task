import { notify } from 'react-notify-toast';

const timeout = 2000;

export default function showError() {
  notify.show('Error occured calling the API.', 'error', timeout);
}
