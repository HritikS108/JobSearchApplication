import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchJobDetails,fetchRelatedJobs } from '../store/actions/jobActions';
import { useNavigate, useParams } from 'react-router-dom';
import ApplicationForm from './application-form';
import '../css/job-details.css'; 
import SuccessPage from "./success-page";
import {JobList} from "./jobList"

function JobDetails(props) {
  const { selectedJob ,relatedJobs } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3d--uV61nFQ0KTgiIwQ2Dd3fwhfPD-ahBBJz6FOwe1ir_CqbnhdDHG16hQ8VKEG5usQ&usqp=CAU";

  const [showForm, setShowForm] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    props.fetchJobDetails(id);
  }, [id, props]);

  const handleClick = () => {
    setShowForm(true);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  }

  const handleFormSubmit = (formData) => {
    
  }

  return (
    <div className="details-page">
    
        <div className="job-detail">
          {selectedJob && (
            <article>
              <div className="headerCard">
                  <div className="company-logo">
                  <img className="logo" src={selectedJob.logo?selectedJob.logo:logoUrl} alt={selectedJob.company_name} onError={(e) => {e.target.src = logoUrl;}} />
                  </div>
                  <div className="role-heading">
                      <h1>{selectedJob.role}</h1>
                      <h4>{selectedJob.company_name}</h4>
                      <h2>Skills Required</h2>
                      <div className="skills">
                          {selectedJob.keywords.map((skill, index) => (
                            <div key={index} className="skill-box">
                              {skill}
                            </div>
                          ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                          <h3>{selectedJob.remote ? 'Remote  ' : 'Onsite  '}</h3>
                          <h3 style={{ marginLeft: '10px' }}>{selectedJob.location}</h3>
                    </div>
                      <button onClick={handleClick}>Apply for the job</button>
                  </div>
              </div>
              
              <div className="description">
                <h3>About this role</h3>
                <div dangerouslySetInnerHTML={{ __html: selectedJob.text }} />
              </div>
          
            </article>
          )}

            {showForm && (
              <div className="modal">
                <div className="modal-content">
                  <ApplicationForm selectedJobId = {selectedJob.id} handleCloseForm={handleCloseForm} handleFormSubmit={handleFormSubmit} />
                </div>
              </div>
            )}

           
                  
        </div>

        <div className="related-jobs">
            <h2>Related Jobs</h2>
            {/* {relatedJobs.length > 0 && <JobList jobs={relatedJobs} />} */}
        </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedJob: state.job.selectedJob,
  relatedJobs : state.job.relatedJobs
});

const mapDispatchToProps = {
  fetchJobDetails,fetchRelatedJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
