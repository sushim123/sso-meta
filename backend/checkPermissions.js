const axios = require('axios');

const accessToken = 'EAAOSBQYT5ycBOyGx3EvybFuSuNWaLLeKdZBcvYQ2aGCDFizZBrWTve2VkkHnEbHanMkwxhZCbQGwHYED64QE7H82JxwpmpXbkt2tCw73R822oZCaFdzdwBRanYHlunZAw9Oyb3sfXleERwZB2uXkCATlZCLRy79fKam2k7ITiGtxLqra469CwiLJSxUpJFsxm7X7at602KBYqJJBzEJw3lWxuAeFFAZD'; // Replace with your actual user access token

axios.get('https://graph.facebook.com/v12.0/me/permissions', {
  params: { access_token: accessToken }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
