import React from 'react';
import NavBar from '../../componets/Navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import University from "../../Images/University.png";

const ProfileAdmin = () => {
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
                                <li className="nav-item">
                                    <a href="#" className="nav-link active" aria-current="page">
                                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link link-dark">
                                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                                        Job Updates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link link-dark">
                                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                                        Other Info
                                    </a>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <section style={{ backgroundColor: '#eee' }}>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col">
                                        <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
                                        <div class="container">
        <div class="row">
            <div class="col-md-4">
               
                <select class="form-select border-secondary text-muted" aria-label="Filter">
                    <option selected>Filter</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div class="col-md-4">
               
                </div>
 
            <div class="col-md-4">
               
                <div class="input-group">
                    <input type="text" class="form-control border border-secondary" placeholder="Search by name"
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
                                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                                <div className="d-flex justify-content-center mb-2">
                                                    <button type="button" className="btn btn-primary">Follow</button>
                                                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 mb-lg-0">
                                            <div className="card-body p-0">
                                                <ul className="list-group list-group-flush rounded-3">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                                        <p className="mb-0">https://mdbootstrap.com</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <i className="fab fa-github fa-lg text-body"></i>
                                                        <p className="mb-0">mdbootstrap</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                                                        <p className="mb-0">@mdbootstrap</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                                                        <p className="mb-0">mdbootstrap</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                                                        <p className="mb-0">mdbootstrap</p>
                                                    </li>
                                                </ul>
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
                                                        <p className="mb-0">Phone</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Mobile</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">(098) 765-4321</p>
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
                                            </div>
                                        </div>

                                      
                                       

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card mb-4 mb-md-0">
                                                    <div className="card-body">
                                                        <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                        <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card mb-4 mb-md-0">
                                                    <div className="card-body">
                                                        <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                        <div className="progress rounded" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                        <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
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
                                                    <button type="button" className="btn btn-primary">Apply Now</button>
                                                </div>
                                            </div>
                                        </div>

                                        <br></br>
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
                            </div>
                            
                        </section>
                        
                    </div>
                </div>
                <hr></hr>
                <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border rounded shadow">
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
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="status">Status</label>
              <select className="form-control" id="status" name="status">
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="contact">
                <i className="fa-solid fa-phone mr-2"></i>Apply till
              </label>
              <input
                type="date"
                className="form-control"
                id="contact"
                required
                placeholder="Last Date "
                name="contact"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="description">Job Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name="description"
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
    </div>
            </div>

            
            <Footer />
        </>
    );
};

export default ProfileAdmin;
