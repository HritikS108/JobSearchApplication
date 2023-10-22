import React from "react";
import { Link } from "react-router-dom";
import '../css/job-list.css'; 

export const JobList = function ({ jobs }) {

  const formatDate = (date) => {
    const jobDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate - jobDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24)); // To Convert milliseconds to days

    return `${daysAgo} days ago`;
  };

  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3d--uV61nFQ0KTgiIwQ2Dd3fwhfPD-ahBBJz6FOwe1ir_CqbnhdDHG16hQ8VKEG5usQ&usqp=CAU";

  return (
    <div className="job-list-container">
      <ul className="job-items">
        {jobs.map((job) => (
          <li key={job.id} className="job-list-item">
            <div className="job-card">
                <div className="job-logo">
                   <h3>{job.company_name}</h3>
                   <img className="logo" src={job.logo?job.logo:logoUrl} alt={job.company_name} onError={(e) => {e.target.src = logoUrl;}} />
                </div>
                <div className="job-details">
                    <h3 className="job-title-link">{job.role}</h3>
                    <p><b>{job.remote ? 'Remote' : 'Onsite'} </b> <span> {job.location}</span></p>
                    <p>Posted {formatDate(job.date_posted)}</p>
                    
                </div>
                <div className="view-apply">
                  <Link to={`/job-details/${job.id}`}>View Details</Link>
                  <Link to="/">Apply Now</Link>

                </div>
            </div>
             
          </li>
        ))}
      </ul>
    </div>
  );
};
