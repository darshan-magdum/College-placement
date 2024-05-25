import React, { useState } from 'react';
import NavBar from '../../componets/Navbar/Navbar';
import University from "../../Images/University.png";
import Stdsplace_Info from '../Home/Stdsplace_Info';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import UserDetails from './UserDetails';
const ProfileUser = () => {

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

    
    const handleUpdateSubmit = () => {
        // Handle form submission logic here
    }
    
  
    

    return (
        <>
            <NavBar  profile={profile} setProfile={setProfile} 
             setHome={setHome} 
             setJobUpdates={setJobUpdates} 
             setToOtherInfo={setToOtherInfo} 
             setViewJobs={setViewJobs}
             setViewinfo={setViewinfo}
            />
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
<h3 className="mb-2"><b>Job Updates</b></h3>
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
    <p className="text-muted">Company description goes here. This should be a brief overview of what the company does, its mission, and any other pertinent information.</p>
    <p>Last Date to Apply- 2121</p>
    <div className="d-flex justify-content-end">
    <button type="button" className="btn btn-danger">Expired</button> &nbsp;&nbsp;&nbsp;
    <button type="button" className="btn btn-success">Active</button> &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary">Apply Now</button>
    </div>
</div>
</div>

<br></br>
</>
: OtherInfo ? <>
<h3 className="mb-2"><b>Other Information</b></h3>
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
                                            </div>
                                        </div>
</>
: profile ?
<>
<div className="row">
<h3 className="mb-2"><b>Your Profile</b></h3>
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
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Second Year - CSE</p>
                {/* <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div> */}
            </div>
        </div>
      
    </div>
    <div className="col-lg-8">
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                </div>
                <hr />
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
                <hr />
             
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Resume</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>

                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Marks - 10th</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">12th /Diploma</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering First Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>
                    
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering Second Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering Third Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>
                    
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Engineering Last Year</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">80%</p>
                    </div>
                    
                </div>
                <hr />
            </div>
        </div>

      
       

       
    </div>
</div>
<br></br>




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
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" defaultValue="Johnatan Smith" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Email</label>
                            <input type="text" className="form-control" id="fullName" defaultValue="Johnatan Smith" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input type="tel" className="form-control" id="contactNumber" defaultValue="(097) 234-5678" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" defaultValue="Bay Area, San Francisco, CA" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Department</label>
                            <input type="text" className="form-control" id="fullName" defaultValue="Johnatan Smith" />
                        </div>
                        <div className="mb-3">
    <label htmlFor="currentYear" className="form-label">Current year</label>
    <select className="form-select" style={{backgroundColor:"#f3f4f6"}} id="currentYear">
        <option value="first">First year</option>
        <option value="second">Second year</option>
        <option value="third">Third year</option>
        <option value="fourth">Fourth year</option>
    </select>
</div>

                        <div className="mb-3">
                            <label htmlFor="resume" className="form-label">Resume</label>
                            <input type="file" className="form-control" id="resume" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Marks - 10th</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Marks - 12th</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Marks - Diploma</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Engineering First Year</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Engineering Second Year</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Engineering Third Year</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Engineering Last Year</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="80" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marks10th" className="form-label">Interest</label>
                            <input type="text" className="form-control" id="marks10th" defaultValue="" placeholder='Web Development , Data Scientist' />
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
<UserDetails />
       
        </>
    );
};

export default ProfileUser;
