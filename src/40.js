const axios = require('axios');

async function getRandomNodejsCode() {
  const response = await axios.get('https://api.example.com/nodes');
  return response.data.nodes;
}

module.exports = getRandomNodejsCode;
