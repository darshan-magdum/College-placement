import React, { useState } from 'react';
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


    


      const handleUpdateButtonClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    
    const handleUpdateSubmit = () => {
 
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
  
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        // Convert the image file to a base64 encoded string
        const base64String = reader.result;
        setFormData({
          ...formData,
          logo: base64String,
        });
      };
      
      if (file) {
        reader.readAsDataURL(file);
      }
    };

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
            <span>Home</span>
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
<div class="col-md-4">

</div>

<div class="col-md-4">

<div class="input-group">
<input type="text" class="form-control border border-secondary" placeholder="Search by Student name"
style={{backgroundColor:"white"}}/>
</div>
</div>
</div>
</div>
                 </nav>
             </div>
         </div>

       <Stdsplace_Info/>
         <br></br>
     
    
     

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
          <p className="display-4">0</p>
        </div>
        <div className="card bg-light shadow mb-3 p-4 text-center">
          <h5 className="text-success">Active Jobs</h5>
          <p className="display-4">0</p>
        </div>
        <div className="card bg-light shadow mb-3 p-4 text-center">
          <h5 className="text-danger">Expired Jobs</h5>
          <p className="display-4">0</p>
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
          <form>
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
                name="title"
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
                name="description"
                placeholder="Description goes here. This should be a brief overview of the content."
              ></textarea>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="category">Category</label>
              <select className="form-control" id="category" name="category">
                <option value="Job Preparation">Job Preparation</option>
                <option value="Others">Others</option>
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
                name="date"
                min={todayString}
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
    {/* <button type="button" className="btn btn-success" onClick={handleUpdateButtonClick}>Update</button>  */}
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
               
               
<div class="container">
<div class="row">
<div class="col-md-4">

<select class="form-select border-secondary text-muted" aria-label="Filter">
<option selected>Filter By : Job Status</option>
<optgroup label="Job Status">
<option value="civil_engineering">Active</option>
<option value="entc">Expired</option>
</optgroup>
</select>

</div>
<div class="col-md-4">

</div>

<div class="col-md-4">

<div class="input-group">
<input type="text" class="form-control border border-secondary" placeholder="Search by Company Name"
style={{backgroundColor:"white"}}/>
</div>
</div>
</div>
</div>
                 </nav>

<div className="card mb-4">
  <div className="card-body">
    <div className="d-flex align-items-center mb-3">
      <img
        src="https://via.placeholder.com/50"
        alt="Company Logo"
        className="img-fluid rounded-circle"
        style={{ width: '50px', height: '50px' }}
      />
      <h5 className="mb-0 ms-3">Company Name</h5>
    </div>
    <p className="text-muted">
      Company description goes here. This should be a brief overview of what the company does, its mission, and any other pertinent information.
    </p>
    <p>Last Date to Apply- 2121</p>
    <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-danger">Expired</button> &nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-success">Active</button> &nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-primary">Delete</button>
    </div>
  </div>
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

<select class="form-select border-secondary text-muted" aria-label="Filter">
<option selected>Filter By : Info</option>
<optgroup label="More Info">
<option value="civil_engineering">Job Preparation</option>
<option value="entc">Others</option>
</optgroup>
</select>

</div>
<div class="col-md-4">

</div>

<div class="col-md-4">


</div>
</div>
</div>
               </nav>
<div className="card mb-4">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    
                                                    <img
                                                        src={University}
                                                        alt="Company Logo"
                                                        className="img-fluid rounded-circle"
                                                        style={{ width: '50px', height: '50px' }}
                
                                                    />
                                                    
                                                    <h5 className="mb-0 ms-3">How to Prepare for HR Round</h5>
                                                </div>
                                                <p className="text-muted">Company description goes here. This should be a brief overview of what the company does, its mission, and any other pertinent information.</p>
                                                <p>Uploaded on- 2121</p>
                                                <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-success">Job Preparation</button> &nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-success">Others</button> &nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-primary">Delete</button>
    </div>
                                            </div>
                                            
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
            <Modal show={showModal} onHide={handleCloseModal}  size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Email</label>
                            <input type="text" className="form-control" id="fullName" defaultValue="Johnatan Smith" />
                        </div>
                       
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input type="tel" className="form-control" id="contactNumber" defaultValue="(097) 234-5678" />
                        </div>
                      
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">College</label>
                            <input type="tel" className="form-control" id="contactNumber" defaultValue="(097) 234-5678" />
                        </div>
                       
                    </form>
                    </div>
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
