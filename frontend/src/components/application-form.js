import React, { useState } from 'react';
import '../css/application-form.css'; 
import { connect } from 'react-redux';
import { updateFormData } from '../store/actions/jobActions';
import { useNavigate } from "react-router-dom";

function ApplicationForm(props) {

  const navigate = useNavigate();
  const [formData, setData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
    id : props.selectedJobId,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });

    if(type==='file')setSelectedFile(e.target.files[0]);;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateFormData(formData);
    navigate('/success-page');
  }

  return (
    <div className="application-form">
      <h3>Apply for the Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cover Letter:</label>
          <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="file-upload-label">
                Upload Resume
                <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                />
            </label>
        </div>
        {selectedFile && <p>{selectedFile.name}</p>}
        <button type="submit">Submit</button>
        
        <button type="button" onClick={props.handleCloseForm}>Close</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  formData : state.job.formData,
});

const mapDispatchToProps = {
  updateFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
