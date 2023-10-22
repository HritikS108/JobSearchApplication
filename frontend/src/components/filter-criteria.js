import React, { useState, useEffect } from "react";
import '../css/filter-criteria.css'; // Import your custom CSS here
import { connect } from 'react-redux';
import { fetchJobs } from '../store/actions/jobActions';

export function FilterCriteria(props) {
  const languages = ['','Java', 'javascript', 'Python', 'C++', 'Go', 'Kotlin', 'Php', 'react'];
  const locations = ['','India', 'USA', 'Germany', 'UK'];

  const [language, setLanguage] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(0);

  function onSubmit() {
    const filter = {
      language,
      location,
      remote,
    };

    props.fetchJobs(filter);
  }

  return (
    <div className="filter-criteria">
      <div className="criteria">
        <p>Select Language</p>
        <input className="list"
          type="text"
          placeholder="Type languages"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>

      <div className="criteria">
        <p>Select Location</p>
        <input className="list"
          type="text"
          placeholder="Type Locations"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>

      <div className="criteria">
        <button className="search-button" onClick={onSubmit}>Search</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.job.jobs,
});

const mapDispatchToProps = {
  fetchJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCriteria);
