import React from "react";
import '../css/success-page.css';
import { connect } from 'react-redux';


function SuccessPage(props) {

  const formData = props.formData;
  console.log(formData);

  const pdfUrl = "https://sharmahritikresume.tiiny.site/";

  return (
    <div className="success-page">
      <h1>Congrats !! Your application has been successfully submitted</h1>
      <div className="page-details">
          { formData ? (
            <div className="user-data">
                <h2><strong>Candidate Name :</strong> {formData.name}</h2>
                <h2><strong>Email Address :</strong> {formData.email}</h2>
                <h2><strong>Cover Letter :</strong></h2>
                <div className="cover-letter"> 
                      {formData.coverLetter}
                </div>
          </div>
          ) :null}
          <div className="user-resume">
            {formData ? (
                          <embed src={pdfUrl} type="application/pdf" width="100%" height="1200px" />
            ) : null}
          </div>
      </div>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  formData: state.job.formData,
});

export default connect(mapStateToProps)(SuccessPage);
