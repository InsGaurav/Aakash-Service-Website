import React, { useState, useEffect } from 'react';
import '../styles/Career.css';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
  });
  const [success, setSuccess] = useState(false);

  const [jobOpenings] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      experience: '2+ Years',
      description: 'React, CSS, HTML, TypeScript',
    },
    {
      id: 2,
      title: 'Backend Developer',
      experience: '3+ Years',
      description: 'Node.js, Express, MongoDB',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      experience: '2+ Years',
      description: 'Figma, Adobe XD, Prototyping',
    },
    {
      id: 4,
      title: 'Frontend Developer',
      experience: '2+ Years',
      description: 'React, CSS, HTML, TypeScript',
    },
    {
      id: 5,
      title: 'Frontend Developer',
      experience: '2+ Years',
      description: 'React, CSS, HTML, TypeScript',
    },
    {
      id: 6,
      title: 'Frontend Developer',
      experience: '2+ Years',
      description: 'React, CSS, HTML, TypeScript',
    },
    {
      id: 7,
      title: 'Frontend Developer',
      experience: '2+ Years',
      description: 'React, CSS, HTML, TypeScript',
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: '', email: '', phone: '', position: '', resume: null });
    }, 3000);
  };

  return (
    <div className="page-container">
      <section className="header-section">
        <div className="header-content1">
          <h1 className="header-title">Careers</h1>
          <p className="header-description">Join our team and help shape the future of tech with creativity and innovation.</p>
        </div>
      </section>

      <main className="main-content">
        <section className="job-openings">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-description">We’re always looking for creative, talented self-starters to join the team. Check out our open roles below.</p>
          </div>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <img src="/CareerAsset/rectangle-4421.svg" alt={job.title} className="job-image" />
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>
                  <p className="job-experience">{job.experience}</p>
                  <button className="apply-btn">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="application-form">
          <div className="form-header">
            <h2 className="form-title">Apply Now</h2>
            <p className="form-description">Fill out the form below and upload your resume. Our team will get back to you shortly.</p>
          </div>
          <form className="job-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position Applied For</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group file-input">
              <img src="/CareerAsset/link-alt.svg" alt="Upload" className="upload-icon" />
              <label htmlFor="resume" className="file-label">
                {formData.resume ? formData.resume.name : 'Upload Resume'}
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleInputChange}
                style={{ display: 'none' }}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>

          {success && (
            <div className="success-message">
              <div className="success-content">
                <h3>Application Submitted!</h3>
                <p>Thank you for applying. We’ll review your application and get back to you soon.</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Career;
