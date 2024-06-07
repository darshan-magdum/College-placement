import React, { useEffect, useState } from 'react';
import NavBar from '../../componets/Navbar/Navbar';
import University from "../../Images/University.png";
import Stdsplace_Info from '../Home/Stdsplace_Info';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const ProfileAdmin = () => {

    const [home,setHome] = useState(true);
  const [JobUpdates,setJobUpdates] = useState(false); 
  const [OtherInfo,setToOtherInfo] = useState(false); 
  const [profile, setProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ViewJobs,setViewJobs] = useState(false); 
  const [Viewinfo,setViewinfo] = useState(false); 

  const [jobPostings, setJobPostings] = useState([]);

  const [infoPostings, setInfoPostings] = useState([]);
 
  const GoToHome = () =>{
    setHome(true);
    setToOtherInfo(false);
    setJobUpdates(false);
    setProfile(false);
    setViewJobs(false);
    setViewinfo(false);
      }

      const GoToJobUpdates = () =>{
        setHome(false);
        setJobUpdates(true);
        setToOtherInfo(false);
        setProfile(false);
        setViewJobs(false);
        setViewinfo(false);
      }


      
      const GoToOtherInfo = () =>{
        setHome(false);
        setJobUpdates(false);
        setToOtherInfo(true);
        setProfile(false);
        setViewJobs(false);
        setViewinfo(false);
      }


            
    const GoToViewJobs = () =>{
      setHome(false);
      setJobUpdates(false);
      setToOtherInfo(false);
      setProfile(false);
      setViewJobs(true);
      setViewinfo(false);
    }
            
    const GoToViewinfo = () =>{
      setHome(false);
      setJobUpdates(false);
      setToOtherInfo(false);
      setProfile(false);
      setViewJobs(false);
      setViewinfo(true);
    }


    

    

    

  

    const [success, setSuccess] = useState(false);


  
    const [formData, setFormData] = useState({
      companyName: '',
      logo: null,
      status: 'Active',
      applyTill: '',
      criteria10th: '',
      criteria12thDiploma: '',
      criteriaEngineering: '',
      description: ''
    });
  
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
      // Handler for file input change (logo)
  const handleEditFileChange = (event) => {
    // Update logo in formData
    setFormData({
      ...formData,
      logo: event.target.files[0], // Assuming only one file is selected
    });
  };

  
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      
    
      if (file) {
         
          if (file.type && file.type.startsWith('image/')) {
              const reader = new FileReader();
  
              reader.onloadend = () => {
                  const base64String = reader.result;
                  setFormData({
                      ...formData,
                      logo: base64String,
                  });
              };
  
              reader.readAsDataURL(file);
          } else {
              
            alert("Please Select image file only")
              
          }
      }
  };
  
    // const handleFileChange = (e) => {
    //   const file = e.target.files[0];
    //   const reader = new FileReader();
      
    //   reader.onloadend = () => {
      
    //     const base64String = reader.result;
    //     setFormData({
    //       ...formData,
    //       logo: base64String,
    //     });
    //   };
      
    //   if (file) {
    //     reader.readAsDataURL(file);
    //   }
    // };

    const [filteredJobPostings, setFilteredJobPostings] = useState([]);
    const [filter, setFilter] = useState([]);

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const response = await axios.post(`http://localhost:8080/api/jobPostings`, formData, {
          headers: {
            'Content-Type': 'application/json' 
          }
        });
        setSuccess(true);
        toast.success("New Job  Created SuccessFully!", { autoClose: 2000 });
        
        console.log('New Job  Created SuccessFully!:', response.data);
       
      } catch (error) {
        console.error('Error updating user details:', error);
        
      }
    };
  
    useEffect(() => {
      const fetchJobPostings = async () => {
        try {
          console.log('Before GET request');
          const response = await axios.get('http://localhost:8080/api/jobPostings');
          console.log('After GET request');
          setJobPostings(response.data);
        } catch (error) {
          console.error('Error fetching job postings:', error);
        }
      };
  
      fetchJobPostings();
    }, []);
  
    const activeJobCount = jobPostings.filter(job => job.status === "Active").length;
    const ExpiredJobCount = jobPostings.filter(job => job.status === "Expired").length;
    const totalJobCount = jobPostings.length;

  console.log("totalJobCount",totalJobCount)
    

    const handleDeleteJob = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/api/jobPostings/${id}`);

        setJobPostings(jobPostings.filter(job => job._id !== id));
        setSuccess(true);
        toast.success("Job  Deleted SuccessFully!", { autoClose: 2000 });
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    };
  
   
    const [infoformData, setinfoFormData] = useState({
      Title: '',
      Category: 'JobPreparation',
      PostedDate: '',
      Description: '',
    });

 
  
    const infohandleSubmit = async (event) => {
      event.preventDefault();
    
      const formData = new FormData(event.target);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
    
      try {
        const response = await axios.post(`http://localhost:8080/api/additionalInfoPostings/infopost`, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setSuccess(true);
        toast.success("New Information Created Successfully!", { autoClose: 2000 });
        console.log('New Job Created Successfully:', response.data);
      } catch (error) {
        console.error('Error updating user details:', error);
      }
    };
    
  
  

    useEffect(() => {
      const fetchinfoPostings = async () => {
        try {
          console.log('Before GET request');
          const response = await axios.get('http://localhost:8080/api/additionalInfoPostings/infoget');
          console.log('After GET request');
          setInfoPostings(response.data);
          setFilter(response.data);
        } catch (error) {
          console.error('Error fetching job postings:', error);
        }
      };
    
      fetchinfoPostings();
    }, []);
    

    const infohandleDeleteJob = async (id) => {
      try {
       
        await axios.delete(`http://localhost:8080/api/additionalInfoPostings/delete/${id}`);

        setInfoPostings(jobPostings.filter(info => info._id !== id));
        setSuccess(true);
        toast.success("Info Deleted SuccessFully!", { autoClose: 2000 });
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    };    

   

 

    const handleinfoFilterChange = (selectedCategory) => {
      console.log('Selected category:', selectedCategory);
      const filteredInfo = infoPostings.filter(info => info.Category === selectedCategory);
      console.log('Filtered info:', filteredInfo);
      setFilter(filteredInfo); 
    };


    const [applications, setApplications] = useState([]);

    useEffect(() => {
      // Fetch applications from your backend API using Axios
      axios.get('http://localhost:8080/api/GetallAppliedJobs')
        .then(response => {
          setApplications(response.data);
          console.log("s",response.data)
        })
        .catch(error => {
          console.error('Error fetching applications:', error);
        });
    }, []);

    const handleUpdateSubmit = async () => {
      try {
        await axios.patch(`http://localhost:8080/api/jobPostings/${selectedJob._id}`, formData);
        handleCloseModal();
        // Refresh job postings after update
        const response = await axios.get('http://localhost:8080/api/jobPostings');
        setJobPostings(response.data);
        setFilteredJobPostings(response.data);
        toast.success("Job Updated SuccessFully!", { autoClose: 2000 });
      } catch (error) {
        console.error('Error updating job posting:', error);
      }
    };

    const [selectedJob, setSelectedJob] = useState(null);

    const handleUpdateButtonClick = (jobId) => {
      const selected = jobPostings.find(job => job._id === jobId);
      const formattedApplyTill = new Date(selected.applyTill).toISOString().split('T')[0];
  
      setSelectedJob(selected);
      setFormData({
        companyName: selected.companyName,
        logo: selected.logo,
        status: selected.status,
        applyTill: formattedApplyTill,
        criteria10th: selected.criteria10th,
        criteria12thDiploma: selected.criteria12thDiploma,
        criteriaEngineering: selected.criteriaEngineering,
        description: selected.description
      });
      setShowModal(true);

      
    };
    
  
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedJob(null);
      setFormData({
        companyName: '',
        logo: '',
        status: '',
        applyTill: '',
        criteria10th: '',
        criteria12thDiploma: '',
        criteriaEngineering: '',
        description: ''
      });
    }


    const handleFilterChange = (selectedStatus) => {
      const filteredJobs = jobPostings.filter(job => job.status === selectedStatus);
      console.log('Filtered infodddd:', filteredJobs);
      setFilteredJobPostings(filteredJobs);
    };
  
    const handleSearchChange = (searchQuery) => {
      const filteredJobs = jobPostings.filter(job => job.companyName.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredJobPostings(filteredJobs);
    };
    return (
        <>
            <NavBar  profile={profile} setProfile={setProfile} 
             setHome={setHome} 
             setJobUpdates={setJobUpdates} 
             setToOtherInfo={setToOtherInfo} 
             setViewJobs={setViewJobs}
             setViewinfo={setViewinfo}
            />
             <ToastContainer position="top-right" autoClose={2000} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '100%' ,height:"100%"}}>
                            <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                                <span className="fs-6">Admin Dashboard</span>
                            </p>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item" onClick={GoToHome}>

    <a href="#" className={"nav-link " + (home ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{color:'black'}}>home</span>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            <span>Applied Jobs</span>
        </div>
    </a>
</li>
<li className="nav-item" onClick={GoToJobUpdates}>
    <a href="#" className={"nav-link " + (JobUpdates ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span class="material-symbols-outlined" style={{color:'black'}}>
work
</span>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            <span>Add Jobs</span>
        </div>
    </a>
</li>
<li className="nav-item" onClick={GoToOtherInfo}>
    <a href="#" className={"nav-link " + (OtherInfo ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span class="material-symbols-outlined" style={{color:'black'}}>
        add_circle
</span>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            <span>Add Information</span>
        </div>
    </a>
</li>

<li className="nav-item" onClick={GoToViewJobs}>
    <a href="#" className={"nav-link " + (ViewJobs ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span class="material-symbols-outlined" style={{color:'black'}}>
        visibility
</span>

            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            <span>View Jobs</span>
        </div>
    </a>
</li>

<li className="nav-item" onClick={GoToViewinfo}>
    <a href="#" className={"nav-link " + (Viewinfo ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span class="material-symbols-outlined" style={{color:'black'}}>
        info
</span>

            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            <span>View Information</span>
        </div>
    </a>
</li>

                            </ul>
                            <hr />
                        </div>
                    </div>

                    <div className="col-lg-9">
                    <section style={{ backgroundColor: '#eee' }}>
                    <div className="container py-3">
{home ?

 
<>
<div className="row">
  <h3 className="mb-2"><b>Home</b></h3>
  <div className="col">
    <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <select class="form-select border-secondary text-muted" aria-label="Filter">
              <option selected>Filter By: Department</option>
              <optgroup label="Engineering Departments">
                <option value="civil_engineering">Civil Engineering</option>
                <option value="entc">Electronics and Telecommunication Engineering (ENTC)</option>
                <option value="information_technology">Information Technology</option>
                <option value="computer_science">Computer Science</option>
                <option value="mechanical_engineering">Mechanical Engineering</option>
                <option value="artificial_intelligence">Artificial Intelligence</option>
              </optgroup>
            </select>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="input-group">
              <input type="text" class="form-control border border-secondary" placeholder="Search by Student name" style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

<br></br>

<div className="row">
  {applications.map(application => (
    <div key={application._id} className="col-md-6 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{application.studentName}</h5>
          <p className="card-text">Contact Number: {application.contactNumber}</p>
          <p className="card-text">Email: {application.email}</p>
          <p className="card-text">Department: {application.department}</p>
          {/* Render additional application details here */}
        </div>
      </div>
    </div>
  ))}
</div>
</>
: JobUpdates ? 
<>
<h3 className="mb-2"><b>Add New Job</b></h3>
<nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <div className="card bg-white shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="companyName">
                <i className="fa-solid fa-user mr-2"></i>Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                required
                placeholder="Company Name"
                name="companyName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="logo">
                <i className="fa-solid fa-envelope mr-2"></i>Logo
              </label><br/>
              <input
                type="file"
                className="form-control-file"
                id="logo"
                required
                name="logo"
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="status">Status</label>
              <select className="form-control" id="status" name="status" onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="applyTill">
                <i className="fa-solid fa-phone mr-2"></i>Apply till
              </label>
              <input
                type="date"
                className="form-control"
                id="applyTill"
                required
                name="applyTill"
                onChange={handleChange}
                min={todayString}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="criteria10th">
                <i className="fa-solid fa-user mr-2"></i>Criteria - 10TH
              </label>
              <input
            type="number" min="0" max="100"
                className="form-control"
                id="criteria10th"
                required
                placeholder="10TH Marks"
                name="criteria10th"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="criteria12thDiploma">
                <i className="fa-solid fa-user mr-2"></i>Criteria - 12TH / Diploma
              </label>
              <input
               type="number" min="0" max="100"
                className="form-control"
                id="criteria12thDiploma"
                required
                placeholder="12TH  /Diploma Marks"
                name="criteria12thDiploma"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="criteriaEngineering">
                <i className="fa-solid fa-user mr-2"></i>Criteria - Engineering upto 5th or 6th SEM or all SEM
              </label>
              <input
              type="number" min="0" max="100"
                className="form-control"
                id="criteriaEngineering"
                required
                placeholder="Engineering Marks"
                name="criteriaEngineering"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="description">Job Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name="description"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <div className="card bg-light shadow mb-3 p-4 text-center">
          <h5 className="text-primary">Total Jobs</h5>
          <p className="display-4">{totalJobCount}</p>
        </div>
        <div className="card bg-light shadow mb-3 p-4 text-center">
          <h5 className="text-success">Active Jobs</h5>
          <p className="display-4">{activeJobCount}</p>
        </div>
        <div className="card bg-light shadow mb-3 p-4 text-center">
          <h5 className="text-danger">Expired Jobs</h5>
          <p className="display-4">{ExpiredJobCount}</p>
        </div>
      </div>
    </div>
  </div>
</nav>



<br/>
</>

: OtherInfo ?
<>
<h3 className="mb-2"><b>Add New Information</b></h3>
<nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <div className="card bg-white shadow p-4">
        <form onSubmit={infohandleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="title">
          <i className="fa-solid fa-heading mr-2"></i>Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          required
          placeholder="Title"
          name="Title"
          onChange={(e) => setinfoFormData({ ...infoformData, Title: e.target.value })} 
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="description">
          <i className="fa-solid fa-align-left mr-2"></i>Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          name="Description" 
          onChange={(e) => setinfoFormData({ ...infoformData, Description: e.target.value })} 
          placeholder="Description goes here. This should be a brief overview of the content."
          required
        ></textarea>
      </div>

      <div className="form-group mb-4">
        <label htmlFor="category">Category</label>
        <select
          className="form-control"
          id="category"
          name="Category"  
          onChange={(e) => setinfoFormData({ ...infoformData, Category: e.target.value })} 
          required
        >
        
        
<option value="JobPreparation">Job Preparation</option>
<option value="others">Others</option>


        </select>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="date">
          <i className="fa-solid fa-calendar-alt mr-2"></i>Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          required
          name="PostedDate" 
          min={todayString}
          onChange={(e) => setinfoFormData({ ...infoformData, PostedDate: e.target.value })} 
          
        />
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Add Information
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  </div>
</nav>
<br/>
</>

: profile ?
<>
<div className="row">
<h3 className="mb-2"><b>Your Profile</b></h3>
    
    
</div>

<div className="d-flex justify-content-end">
    
    </div>
    <br></br>
<div className="row">
    <div className="col-lg-6">
        <div className="card mb-4">
            <div className="card-body text-center">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: '150px' }}
                />
                <h5 className="my-3">Admin</h5>
                <p className="text-muted mb-1">Training and Placement Office</p>
                {/* <p className="text-muted mb-4">DR JJ Magdum College of Engineering</p> */}
                {/* <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div> */}
            </div>
        </div>
      
    </div>
    {/* <div className="col-lg-8">
        <div className="card mb-4">
            <div className="card-body">
             
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">example@example.com</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Contact Number</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                </div>

                
              
             
              
            </div>
        </div>

      
       

       
    </div> */}
</div>
<br></br>




</>
:

ViewJobs ? 
<>
<h3 className="mb-2"><b>View Jobs</b></h3>
<nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">

      
               
               
<div className="row">
            <div className="col-md-4">
            <select className="form-select border-secondary text-muted" aria-label="Filter" onChange={(e) => handleFilterChange(e.target.value)}>
                <option selected disabled>Filter By : Job Status</option>
                <optgroup label="Job Status">
                  <option value="Active">Active</option>
                  <option value="Expired">Expired</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="input-group">
                <input type="text" className="form-control border border-secondary" placeholder="Search by Company Name"
                  style={{ backgroundColor: "white" }}
                  onChange={(e) => handleSearchChange(e.target.value)} />
              </div>
            </div>
          </div>
                 </nav>

               
                  
      


<div className="row">
        {filteredJobPostings.length === 0 ? (
          <div className="col-lg-12">
            <div className="alert alert-info" role="alert">
              No jobs available.
            </div>
          </div>
        ) : (
          filteredJobPostings.map((job) => (
            <div key={job._id} className="col-lg-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={job.logo}
                      alt="Company Logo"
                      className="img-fluid rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                    />
                    <h5 className="mb-0 ms-3">{job.companyName}</h5>
                  </div>
                  <p className="text-muted">{job.description}</p>
                  <bold>Last Date to Apply: {new Date(job.applyTill).toLocaleDateString()}</bold>
                  <div className="d-flex justify-content-end">
              <button type="button" className={`btn ${job.status === 'Active' ? 'btn-success' : 'btn-danger'}`}>
                {job.status}
              </button>
              <button type="button" className="btn btn-primary ms-2" onClick={() => handleDeleteJob(job._id)}>
                Delete
              </button>
              <button type="button" className="btn btn-danger ms-2" onClick={() => handleUpdateButtonClick(job._id)}>
                Update
              </button>
            </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      

</>



:

setViewinfo ?
<>
<h3 className="mb-2"><b>View Information</b></h3>
<nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <select
          class="form-select border-secondary text-muted"
          aria-label="Filter"
          onChange={(e) => handleinfoFilterChange(e.target.value)}
          value={filter} 
        >
          <option value="Info">Filter By : Info</option>
          <optgroup label="More Info">
            <option value="JobPrepation">Job Preparation</option>
            <option value="Others">Others</option>
          </optgroup>

         
        </select>
      </div>
    </div>
  </div>
  
</nav>
               


           



<div className="row">
  {filter.length === 0 ? (
    <div className="col-lg-12">
      <div className="alert alert-info" role="alert">
        No Information available.
      </div>
    </div>
  ) : (
    filter.map((info) => (
      <div key={info._id} className="col-lg-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <img
                src={University}
                alt="Company Logo"
                className="img-fluid rounded-circle"
                style={{ width: '50px', height: '50px' }}
              />
              <h5 className="mb-0 ms-3">{info.Title}</h5>
            </div>
            <p className="text-muted">{info.Description}</p>
            <bold>Last Date to Apply: {new Date(info.PostedDate).toLocaleDateString()}</bold>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-success">Category - {info.Category}</button>
              <button type="button" className="btn btn-primary ms-2" onClick={() => infohandleDeleteJob(info._id)}>
                Delete
              </button>
              <button type="button" className="btn btn-danger ms-2" onClick={() => handleUpdateButtonClick(info._id)}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>
      
</>
:
""}

</div>
</section>
 
</div>

                   
                </div>
            </div>

            
            {/* Modal for Update */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Update Information</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleUpdateSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="companyName">
          <i className="fa-solid fa-user mr-2"></i>Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          required
          placeholder="Company Name"
          name="companyName"
          value={formData.companyName} // Value set from state
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="logo">
          <i className="fa-solid fa-envelope mr-2"></i>Logo
        </label><br/>
        {formData.logo && ( 
          <img src={formData.logo} alt="Logo Preview" style={{ maxWidth: '10%', marginRight: '50px' }} />
        )}
        <input
          type="file"
          className="form-control-file"
          id="logo"
          required
          name="logo"
          onChange={handleEditFileChange}
          
        />
       
      </div>
      <div className="form-group mb-4">
        <label htmlFor="status">Status</label>
        <select
          className="form-control"
          id="status"
          name="status"
          value={formData.status} // Value set from state
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="applyTill">Apply till</label>
        <input
          type="date"
          className="form-control"
          id="applyTill"
          required
          name="applyTill"
          value={formData.applyTill}
          onChange={handleChange}
          min={todayString}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="criteria10th">
          <i className="fa-solid fa-user mr-2"></i>Criteria - 10TH
        </label>
        <input
          type="number"
          min="0"
          max="100"
          className="form-control"
          id="criteria10th"
          required
          placeholder="10TH Marks"
          name="criteria10th"
          value={formData.criteria10th} 
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="criteria12thDiploma">
          <i className="fa-solid fa-user mr-2"></i>Criteria - 12TH / Diploma
        </label>
        <input
          type="number"
          min="0"
          max="100"
          className="form-control"
          id="criteria12thDiploma"
          required
          placeholder="12TH  /Diploma Marks"
          name="criteria12thDiploma"
          value={formData.criteria12thDiploma} 
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="criteriaEngineering">
          <i className="fa-solid fa-user mr-2"></i>Criteria - Engineering upto 5th or 6th SEM or all SEM
        </label>
        <input
          type="number"
          min="0"
          max="100"
          className="form-control"
          id="criteriaEngineering"
          required
          placeholder="Engineering Marks"
          name="criteriaEngineering"
          value={formData.criteriaEngineering} 
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="description">Job Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          name="description"
          value={formData.description} 
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
    <Button variant="primary" onClick={handleUpdateSubmit}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>


       
        </>
    );
};

export default ProfileAdmin;
