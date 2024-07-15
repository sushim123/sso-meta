const express = require('express');
const axios = require('axios');
const app = express();

app.get('/auth/meta/callback', async (req, res) => {
  const { code } = req.query;
  try {
    
    const tokenResponse = await axios.get('https://graph.facebook.com/v12.0/oauth/access_token', {
      params: {
        client_id: '1004975204591399',
        redirect_uri: 'http://localhost:3000/auth/meta/callback',
        client_secret: '7e8b82b4c44bce752454ba4a99cccb70',
        code,
      },
    });
    const { access_token } = tokenResponse.data;

  
    const userProfileResponse = await axios.get('https://graph.facebook.com/me', {
      params: {
        access_token,
        fields: 'id,name,email',
      },
    });
    const userProfile = userProfileResponse.data;

 
    const accountsResponse = await axios.get(`https://graph.facebook.com/${userProfile.id}/accounts`, {
      params: { access_token },
    });
    const accounts = accountsResponse.data.data;

    
    const isProfessional = accounts.some(account => account.category === 'Professional');
    if (!isProfessional) {
      
      res.status(403).send('Only professional accounts can log in.');
      return;
    }

    const metricsResponse = await axios.get(`https://graph.facebook.com/${userProfile.id}/insights`, {
      params: {
        access_token,
        metric: 'followers_count',a
      },
    });
    const metrics = metricsResponse.data.data;

    
    res.json({
      profile: userProfile,
      metrics,
    });
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).send('Error during authentication');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
