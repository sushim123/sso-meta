const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/check-permissions', (req, res) => {
  const accessToken = 'EAAOSBQYT5ycBOyGx3EvybFuSuNWaLLeKdZBcvYQ2aGCDFizZBrWTve2VkkHnEbHanMkwxhZCbQGwHYED64QE7H82JxwpmpXbkt2tCw73R822oZCaFdzdwBRanYHlunZAw9Oyb3sfXleERwZB2uXkCATlZCLRy79fKam2k7ITiGtxLqra469CwiLJSxUpJFsxm7X7at602KBYqJJBzEJw3lWxuAeFFAZD'; // Replace with your actual user access token

  axios.get('https://graph.facebook.com/v12.0/me/permissions', {
    params: { access_token: accessToken }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error fetching permissions');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
