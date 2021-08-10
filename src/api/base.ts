import axios from 'axios';

// the connection base:
let baseUrl: string;

// all potential locals
const LOCALS: string[] = [`localhost`, `127.0.0.1`, ``];

// check wether the app hosted on local or not:
if (LOCALS.includes(window.location.hostname)) {
  baseUrl = `http://localhost:5000`;
} else {
  baseUrl = `your-api-server`;
}

// >>>> create axios instance:
const APIHandler = axios.create({ baseURL: baseUrl });

// make a verification with every future sent req
APIHandler.interceptors.request.use((req) => {
  const authed = JSON.parse(localStorage.getItem('currentAuthedUser') || '{}');
  if (authed) {
    req.headers.Authorization = `Bearer ${authed.token}`;
  }

  return req;
});

export default APIHandler;
