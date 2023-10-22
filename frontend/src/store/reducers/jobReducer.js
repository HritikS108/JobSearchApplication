const initialState = {
    jobs: [], 
    selectedJob: null, // store the selected job
    relatedJobs:[],
    formData : null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOBS':
        return { ...state, jobs: action.payload };
      case 'SELECT_JOB':
        return { ...state, selectedJob: action.payload };
      case 'RELATED_JOBS':
        return {...state, relatedJobs:action.payload};
      case 'SET_FORM_DATA':
        return {...state, formData:action.payload};
      default:
        return state;
    }
  };
  
  export default jobReducer;