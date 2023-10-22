import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../store/actions/jobActions';
import { JobList } from "./jobList";
import FilterCriteria from './filter-criteria';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchJobs(''); 
  }

  render() {
    return (
        <div>
           <FilterCriteria/>
           <JobList jobs={this.props.jobs}/> 
        </div>
    )
  }
}

// This function is used to map a part of the Redux store's state to the props of the Home component.
const mapStateToProps = (state) => ({
  jobs: state.job.jobs,
});

//This object defines which action creators you want to make available as props in your component.
const mapDispatchToProps = {
  fetchJobs,
};

//The connect function is used to connect the mapStateToProps and mapDispatchToProps to the Home component. 
//This makes the Redux store data (jobs) and action creators (fetchJobs and selectJob) available as props within the Home component.
export default connect(mapStateToProps, mapDispatchToProps)(Home);

