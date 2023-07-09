//create api root with axios

import axios from 'axios';

const URL = 'http://localhost:5000/api';

export default axios.create({
  baseURL: URL,
});
