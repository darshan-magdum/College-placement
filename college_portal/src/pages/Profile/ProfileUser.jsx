import React, { useState } from 'react';
import NavBar from '../../componets/Navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import University from "../../Images/University.png";

const ProfileUser = () => {

    const [home,setHome] = useState(true);
  const [JobUpdates,setJobUpdates] = useState(false); 
  const [OtherInfo,setToOtherInfo] = useState(false); 
    
  const GoToHome = () =>{
    setHome(true);
    setToOtherInfo(false);
    setJobUpdates(false);
      }

      const GoToJobUpdates = () =>{
        setHome(false);
        setJobUpdates(true);
        setToOtherInfo(false);
      }


      
      const GoToOtherInfo = () =>{
        setHome(false);
        setJobUpdates(false);
        setToOtherInfo(true);
      }
      

    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '100%' ,height:"100%"}}>
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                                <span className="fs-6">Student Dashboard</span>
                            </a>
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

            
       
        </>
    );
};

export default ProfileUser;
