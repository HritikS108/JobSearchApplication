import axios from 'axios';

export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  payload: jobs,
});

export const setRelatedJobs = (jobs) => ({
  type: 'RELATED_JOBS',
  payload: jobs,
});

export const selectJob = (job) => ({
  type: 'SELECT_JOB',
  payload: job,
});

export const setFormData = (data) => ({
  type: 'SET_FORM_DATA',
  payload: data,
});

// Use thunk to make asynchronous API requests
export const fetchJobs = (filterCriteria) => {
  
  const baseUrl = "https://jobsearch-bwbz.onrender.com//api/jobs";
  const apiKey = '55d77c512c3b0e2f0e86ac1dee30804ff3fbcf58';

  const config = {
    headers: {
      Authorization: `Token ${apiKey}`,
    },
    params: {
      location:filterCriteria.location,
      search: filterCriteria.language, 
      sort_by: 'relevance', // Sort by relevance or other criteria
    },
  };
  
  return async (dispatch) => {
    try {
      const response = await axios.get(baseUrl, config);        
      console.log('API Request URL:', response.config.url);
      dispatch(setJobs(response.data.results));
    } catch (error) {
      // Handle error
    }
  };
};

export const fetchJobDetails = (jobId) => {

  const baseUrl = "https://jobsearch-bwbz.onrender.com//api/job/";
  const apiKey = '55d77c512c3b0e2f0e86ac1dee30804ff3fbcf58';

  const config = {
    headers: {
      Authorization: `Token ${apiKey}`,
    },
    params: {
      id:jobId,
    },
  };
  
  return async (dispatch) => {
    try {
      const response = await axios.get(baseUrl, config);        
      dispatch(selectJob(response.data));
      //console.log("Hello");
    } catch (error) {
      // Handle error
    }
  };
};

export const fetchRelatedJobs = (filterCriteria) => {
  
  const baseUrl = "https://jobsearch-bwbz.onrender.com//api/jobs";
  const apiKey = '55d77c512c3b0e2f0e86ac1dee30804ff3fbcf58';

  const config = {
    headers: {
      Authorization: `Token ${apiKey}`,
    },
    params: {
      search: filterCriteria.keywords, 
      sort_by: 'relevance', // Sort by relevance or other criteria
    },
  };
  
  return async (dispatch) => {
    try {
      const response = await axios.get(baseUrl, config);        
      console.log('API Request URL:', response.config.url);
      dispatch(setRelatedJobs(response.data.results));
    } catch (error) {
      // Handle error
    }
  };
};

export const updateFormData = (data)=>{
          
      return async(dispatch) => {

          try{
            console.log("make an api call to submit application");
             dispatch(setFormData(data));
          }
          catch(error){

          }
      }
};