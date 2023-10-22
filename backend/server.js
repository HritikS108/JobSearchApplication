const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/jobs', async (req, res) => {
    try {

      const {headers,query} = req;
      console.log(headers,query);
      const {location,search,sort_by} = query;

      const response = await axios.get(`https://findwork.dev/api/jobs/`, {
        headers: {
          Authorization: 'Token 55d77c512c3b0e2f0e86ac1dee30804ff3fbcf58',
        },
        params : {
            search,
            location,
            sort_by
        },
      });
   
      res.json(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/job/', async(req,res)=>{
       
    try {
 
      const {headers,query} = req;
      const {id} = query;

      const response = await axios.get(`https://findwork.dev/api/jobs/${id}`, {
        headers: {
          Authorization: 'Token 55d77c512c3b0e2f0e86ac1dee30804ff3fbcf58',
        },
        
      });
   
      res.json(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
app.listen(3001, () => {
  console.log('Proxy server is running on port 3001');
});
