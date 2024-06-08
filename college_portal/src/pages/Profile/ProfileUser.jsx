import React, { useEffect, useState } from 'react';
import NavBar from '../../componets/Navbar/Navbar';
import University from "../../Images/University.png";
import Stdsplace_Info from '../Home/Stdsplace_Info';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../componets/Loader';
import { ToastContainer, toast } from 'react-toastify';

const ProfileUser = () => {

    const [home,setHome] = useState(false);
  const [JobUpdates,setJobUpdates] = useState(true); 
  const [OtherInfo,setToOtherInfo] = useState(false); 
  const [profile, setProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ViewJobs,setViewJobs] = useState(false); 
  const [Viewinfo,setViewinfo] = useState(false); 
  const [jobPostings, setJobPostings] = useState([]);
  const [infoPostings, setInfoPostings] = useState([]);
  console.log("infoPostings",infoPostings)
    
  const GoToHome = () =>{
    setHome(true);
    setToOtherInfo(false);
    setJobUpdates(false);
    setProfile(false);
 
      }

      const GoToJobUpdates = () =>{
        setHome(false);
        setJobUpdates(true);
        setToOtherInfo(false);
        setProfile(false);
     
      }


      
      const GoToOtherInfo = () =>{
        setHome(false);
        setJobUpdates(false);
        setToOtherInfo(true);
        setProfile(false);
      }

    
      

      const handleUpdateButtonClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    
  
  
    const [user, setUser] = useState(null);
    const [MoreInfo, setMoreInfo] = useState(null);
    const [error, setError] = useState(null);
   

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");

    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${userId}`); // Use userId in the API URL
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
                setError('Error fetching user details');
            }
        };
    
        fetchUser();
    }, [userId]);
    
const [submittedId,setsubmittedId]= useState();

 
    
   
const [formData, setFormData] = useState({
    address: '',
    interest: '',
    department: '',
    studyingYear: '',
    marks10th: '',
    marks12thDiploma: '',
    engineeringFirstYear: '',
    engineeringSecondYear: '',
    engineeringThirdYear: '',
    engineeringLastYear: ''
  });

  const [success, setSuccess] = useState(false);


  useEffect(() => {
   
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      resume: event.target.files[0]
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.put(`http://localhost:8080/api/users/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json' 
        }
      });
      setSuccess(true);
      toast.success("User details updated SuccessFully!", { autoClose: 2000 });
      

      setTimeout(() => {
        window.location.reload();
      }, 3000);
      setShowModal(true);
      console.log('User details updated:', response.data);
     
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
        setFilteredJobPostings(response.data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };
  
    fetchJobPostings();
  }, []);
  

 
  const [filteredJobPostings, setFilteredJobPostings] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/additionalInfoPostings/infoget'); 
        setInfoPostings(response.data);
        setFilter(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
    

  
  const handleFilterChange = (selectedStatus) => {
    const filteredJobs = jobPostings.filter(job => job.status === selectedStatus);
    console.log('Filtered infodddd:', filteredJobs);
    setFilteredJobPostings(filteredJobs);
  };

  const handleSearchChange = (searchQuery) => {
    const filteredJobs = jobPostings.filter(job => job.companyName.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredJobPostings(filteredJobs);
  };

  
  
  const handleinfoFilterChange = (selectedCategory) => {
    console.log('Selected category:', selectedCategory);
    const filteredInfo = infoPostings.filter(info => info.Category === selectedCategory);
    console.log('Filtered info:', filteredInfo);
    setFilter(filteredInfo); 
  };

 


  const check10thMarks = () => {
    const user10thMarks = parseInt(formData.marks10th); 
    const jobPostingsWithMatchingMarks = jobPostings.filter(job => {
      const job10thMarks = parseInt(job.criteria10th);
     
     
      return user10thMarks > job10thMarks
    });
 
    const conditionMet = jobPostingsWithMatchingMarks.length > 0;
    return conditionMet;
 
  };
  
  

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      const conditionMet = check10thMarks();
      if (conditionMet) {
        console.log("Hi");
      }
    }
  }, [formData, jobPostings]);

  const [applicationStatus, setApplicationStatus] = useState({});

console.log("applicationStatus",applicationStatus)

const sendApplication = async (jobId) => {
  try {
    // Extracting specific fields from formData
    const { Name , email, contact, department  } = formData;

    const response = await axios.post('http://localhost:8080/api/jobsapply', {
      studentInfo: { Name , email, contact, department  }, // Sending only required fields
      jobId: jobId
    });

    // Update applicationStatus in localStorage
    const updatedStatus = { ...applicationStatus, [jobId]: response.status === 201 };
    localStorage.setItem('applicationStatus', JSON.stringify(updatedStatus));
    setApplicationStatus(updatedStatus);

    if (response.status === 201) {
      toast.success("Job Application submitted successfully!", { autoClose: 2000 });
    }
  } catch (error) {
    console.error('Error sending application:', error);
  }
};

const hasApplied = (jobId) => {
  return applicationStatus[jobId];
};


useEffect(() => {
  const storedStatus = JSON.parse(localStorage.getItem('applicationStatus'));
  if (storedStatus) {
    setApplicationStatus(storedStatus);
  }
}, []);


const [applyShowModal, setApplyShowModal] = useState(false);
const [applyFormData, setApplyFormData] = useState({
    studentName: '',
    contactNumber: '',
    email: '',
    department: '',
    resume: null
});


const handleOpenApplyEventModal = () => {
    setApplyShowModal(true);
};

const handleCloseApplyModal = () => {
    setApplyShowModal(false);
};

const handleChangeApplyForm = (e) => {
    const { name, value } = e.target;
    setApplyFormData({
        ...applyFormData,
        [name]: value
    });
};


const handleResumeChange = (e) => {
  // Add validation for file type (Word or PDF)
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const selectedFile = e.target.files[0];

  if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setApplyFormData({
          ...applyFormData,
          resume: selectedFile
      });
  } else {
      // Handle invalid file type error
      alert('Please upload a Word (.doc, .docx) or PDF (.pdf) file.');
      // Clear the file input
      e.target.value = null;
  }
};

// const handleApplyFormSubmit = async (e, jobId) => {
//   e.preventDefault(); // Prevent default form submission
  
//   try {
//     // Fetch job details based on jobId asynchronously
//     const jobDetailsPromise = axios.get(`http://localhost:8080/api/jobPostings/${jobId}`);

//     // Wait for job details retrieval to complete
//     const jobDetailsResponse = await jobDetailsPromise;
//     const jobDetails = jobDetailsResponse.data;
    
//     // Extract data from applyFormData
//     const { studentName, contactNumber, email, department ,resume } = applyFormData;

//     // Check if required fields are provided
//     if (!studentName || !contactNumber || !email || !department || !resume) {
//       console.error('All fields are required');
//       return; // Exit the function if any required field is missing
//     }

//     // Make the POST request
//     const response = await axios.post('http://localhost:8080/api/JobApplicationRoutes/post', {
//       studentName,
//       contactNumber,
//       email,
//       resume,
//       department,
//       jobId,
//       jobDetails 

//     });

//     // If the request is successful, reset form data and close the modal
//     if (response.status === 201) { // Assuming 201 for created
//       setApplyShowModal(false);
//       toast.success("Job Application Sent successfully!", { autoClose: 2000 });
//       // Optionally, you can handle success message or other actions here
//       console.log('Application submitted successfully!');
//     }
//   } catch (error) {
//     console.error('Error sending application:', error);
//     // Optionally, you can handle error messages or other actions here
//   }
// };




const handleApplyFormSubmit = async (e, jobId) => {
  e.preventDefault(); // Prevent default form submission
  
  try {
    // Fetch job details based on jobId asynchronously
    const jobDetailsPromise = axios.get(`http://localhost:8080/api/jobPostings/${jobId}`);

    // Wait for job details retrieval to complete
    const jobDetailsResponse = await jobDetailsPromise;
    const jobDetails = jobDetailsResponse.data;
    
    // Extract data from applyFormData
    const { studentName, contactNumber, email, department, resume } = applyFormData;

    // Check if required fields are provided
    if (!studentName || !contactNumber || !email || !department || !jobDetails || !jobDetails._id) {
      console.error('All fields are required');
      return; // Exit the function if any required field is missing
    }

    // Create FormData object to send resume file and form data
    const formData = new FormData();
    formData.append('studentName', studentName);
    formData.append('contactNumber', contactNumber);
    formData.append('email', email);
    formData.append('department', department);
    formData.append('jobId', jobId);
    formData.append('resume', resume);

    // Append job details to formData
    formData.append('jobDetails', JSON.stringify(jobDetails));

    // Make the POST request to submit job application with resume and job details
    const response = await axios.post('http://localhost:8080/api/JobApplicationRoutes/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    // If the request is successful, reset form data and close the modal
    if (response.status === 201) {
      setApplyShowModal(false);
      toast.success("Job Application Sent successfully!", { autoClose: 2000 });
      console.log('Application submitted successfully!');
    }
  } catch (error) {
    console.error('Error sending application:', error);
    // Optionally, you can handle error messages or other actions here
  }
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
                                <span className="fs-6">Student Dashboard</span>
                            </p>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                            {/* <li className="nav-item" onClick={GoToHome}>

    <a href="#" className={"nav-link " + (home ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{color:'black'}}>home</span>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            <span>Home</span>
        </div>
    </a>
</li> */}
<li className="nav-item" onClick={GoToJobUpdates}>
    <a href="#" className={"nav-link " + (JobUpdates ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span class="material-symbols-outlined" style={{color:'black'}}>
work
</span>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            <span>Job Updates</span>
        </div>
    </a>
</li>
<li className="nav-item" onClick={GoToOtherInfo}>
    <a href="#" className={"nav-link " + (OtherInfo ? "active" : "link-dark")}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <span class="material-symbols-outlined" style={{color:'black'}}>
info
</span>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            <span>Other Info</span>
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


 
  

{ JobUpdates ? 
<>
      <h3 className="mb-2"><b>Job Updates</b></h3>
      <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
        <div className="container">
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
              {job.status === "Active" && hasApplied(job._id) ? (
                <>
                <p className='mt-1' style={{ color: "black", fontWeight: 500 }}>Already Applied</p>
                &nbsp;&nbsp;
                  <button type="button" className={`btn ${job.status === 'Active' ? 'btn-success' : 'btn-danger'}`}>
                    {job.status}
                  </button>
                  </>
              ) : (
                <>
                  <button type="button" className={`btn ${job.status === 'Active' ? 'btn-success' : 'btn-danger'}`}>
                    {job.status}
                  </button>
                  {check10thMarks() && job.status === "Active" && !hasApplied(job._id) && (
                    // <button
                    //   type="button"
                    //   className="btn btn-info ms-2"
                    //   onClick={() => {
                    //     sendApplication(job._id);
                    //   }}
                    // >
                    
                    //   Apply
                    // </button>

                     <button
                      type="button"
                      className="btn btn-info ms-2"
                      onClick={() => {
                        handleOpenApplyEventModal();
                      }}
                    >
                      Apply
                    </button>


                    
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <Modal show={applyShowModal} onHide={handleCloseApplyModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Apply for Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                    onSubmit={(e) => handleApplyFormSubmit(e, job._id)}
                    >
                        <div className="mb-3">
                            <label htmlFor="studentName" className="form-label">Student Name</label>
                            <input type="text" className="form-control" id="studentName" placeholder='Enter Your Name' required name="studentName" value={applyFormData.studentName} onChange={handleChangeApplyForm} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contactNumber" name="contactNumber" required placeholder='Enter Your Contact Number' value={applyFormData.contactNumber} onChange={handleChangeApplyForm} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required placeholder='Enter Your Email' value={applyFormData.email} onChange={handleChangeApplyForm} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">Department</label>
                        
                            <select class="form-select border-secondary text-muted" aria-label="Filter" id="department" name="department" required value={applyFormData.department} onChange={handleChangeApplyForm}>
<option selected>Filter By : Department</option>
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

                        <div className="mb-3">
                        <label htmlFor="resume" className="form-label">Resume (Word or PDF)</label>
                        <input type="file" className="form-control" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} required />
                    </div>
                      
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                </Modal.Body>
            </Modal>  
      </div>
      
    ))
  )}
</div>

    </>
: OtherInfo ?
<>
<h3 className="mb-2"><b>Other Information</b></h3>
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
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>
</>

: profile  ?
<>
{user ? <>
<div className="row">
<h3 className="mb-2"><b>Your Profile</b></h3>
    <div className="col">
        
    </div>
    
</div>

<div className="d-flex justify-content-end">
    <button type="button" className="btn btn-success" onClick={handleUpdateButtonClick}>Update</button> 
    </div>
    <br></br>

<div className="row">
    <div className="col-lg-4">
        <div className="card mb-4">
            <div className="card-body text-center">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: '150px' }}
                />
                

                <h5 className="my-3">{user.Name}</h5>
                <p className="text-muted mb-1">{user.email}</p>
                <p className="text-muted mb-4">{user.contact}</p>
            </div>
        </div>
      
    </div>
    <div className="col-lg-8">
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Department</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.department}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Studying Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.studyingYear}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Interests</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.interest}</p>
                    </div>
                </div>
                <hr />
             
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.address}</p>
                    </div>
                </div>
                <hr/>
                
            

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Marks - 10th</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.marks10th}</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">12th /Diploma</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.marks12thDiploma}</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering First Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.engineeringFirstYear}</p>
                    </div>
                    
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering Second Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.engineeringSecondYear}</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering Third Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.engineeringThirdYear}</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering Last Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.engineeringLastYear}</p>
                    </div>
                    
                </div>
                <hr />
            </div>
        </div>

      
       

       
    </div>
</div>
<br></br>


</>
: <Loader/>
}

</>
:

""}

</div>
</section>
 
</div>

                   
                </div>
            </div>

            
            {/* Modal for Update */}
            <Modal show={showModal} onHide={handleCloseModal}  size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input type="text" className="form-control" id="department" name="department" value={formData.department} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="studyingYear" className="form-label">Studying Year</label>
          <select className="form-select" id="studyingYear" name="studyingYear" value={formData.studyingYear} onChange={handleChange}>
            <option value="first">First year</option>
            <option value="second">Second year</option>
            <option value="third">Third year</option>
            <option value="fourth">Fourth year</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="interest" className="form-label">Interests</label>
          <input type="text" className="form-control" id="interest" name="interest" value={formData.interest} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">Resume</label>
          <input type="file" className="form-control" id="resume" name="resume" onChange={handleFileChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="marks10th" className="form-label">Marks - 10th</label>
          <input type="number" min="0" max="100" className="form-control" id="marks10th" name="marks10th" value={formData.marks10th} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="marks12thDiploma" className="form-label">12th / Diploma</label>
          <input type="number" min="0" max="100" className="form-control" id="marks12thDiploma" name="marks12thDiploma" value={formData.marks12thDiploma} onChange={handleChange} />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="engineeringFirstYear" className="form-label">Engineering First Year</label>
          <input type="number" min="0" max="100" className="form-control" id="engineeringFirstYear" name="engineeringFirstYear" value={formData.engineeringFirstYear} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="engineeringSecondYear" className="form-label">Engineering Second Year</label>
          <input type="number" min="0" max="100" className="form-control" id="engineeringSecondYear" name="engineeringSecondYear" value={formData.engineeringSecondYear} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="engineeringThirdYear" className="form-label">Engineering Third Year</label>
          <input type="number" min="0" max="100" className="form-control" id="engineeringThirdYear" name="engineeringThirdYear" value={formData.engineeringThirdYear} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="engineeringLastYear" className="form-label">Engineering Last Year</label>
          <input type="number" min="0" max="100" className="form-control" id="engineeringLastYear" name="engineeringLastYear" value={formData.engineeringLastYear} onChange={handleChange} />
        </div> */}

{formData.studyingYear === 'first' && (
                                <>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringFirstYear" className="form-label">Engineering First Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringFirstYear" name="engineeringFirstYear" value={formData.engineeringFirstYear} onChange={handleChange} />
                                    </div>
                                </>
                            )}
                            {formData.studyingYear === 'second' && (
                                <>
                                 <div className="mb-3">
                                        <label htmlFor="engineeringFirstYear" className="form-label">Engineering First Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringFirstYear" name="engineeringFirstYear" value={formData.engineeringFirstYear} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringSecondYear" className="form-label">Engineering Second Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringSecondYear" name="engineeringSecondYear" value={formData.engineeringSecondYear} onChange={handleChange} />
                                    </div>
                                </>
                            )}
                            {formData.studyingYear === 'third' && (
                                <>
                                 <div className="mb-3">
                                        <label htmlFor="engineeringFirstYear" className="form-label">Engineering First Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringFirstYear" name="engineeringFirstYear" value={formData.engineeringFirstYear} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringSecondYear" className="form-label">Engineering Second Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringSecondYear" name="engineeringSecondYear" value={formData.engineeringSecondYear} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringThirdYear" className="form-label">Engineering Third Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringThirdYear" name="engineeringThirdYear" value={formData.engineeringThirdYear} onChange={handleChange} />
                                    </div>
                                </>
                            )}
                            {formData.studyingYear === 'fourth' && (
                                <>
                                <div className="mb-3">
                                        <label htmlFor="engineeringFirstYear" className="form-label">Engineering First Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringFirstYear" name="engineeringFirstYear" value={formData.engineeringFirstYear} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringSecondYear" className="form-label">Engineering Second Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringSecondYear" name="engineeringSecondYear" value={formData.engineeringSecondYear} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringThirdYear" className="form-label">Engineering Third Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringThirdYear" name="engineeringThirdYear" value={formData.engineeringThirdYear} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="engineeringLastYear" className="form-label">Engineering Last Year</label>
                                        <input type="number" min="0" max="100" className="form-control" id="engineeringLastYear" name="engineeringLastYear" value={formData.engineeringLastYear} onChange={handleChange} />
                                    </div>
                                </>
                            )}

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
                    </div>
                </Modal.Body>
            </Modal>
         


        
       
        </>
    );
};

export default ProfileUser;
