import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';

import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const studentProfiles = {
    student_id: '10947015',
    first_name: 'Haaris',
    middle_name: 'Ali',
    last_name: 'Waqas',
    profile_pic: 'https://cdn2.vectorstock.com/i/1000x1000/76/01/education-icon-male-student-person-profile-avatar-vector-25957601.jpg',
    gender: 'Male',
    department: 'Computer Engineering (CPEN)',
    email: 'haarisali9@gmail.com',
  
  
  };

  return (
    <div>
      <Helmet>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
          
        />

      </Helmet>
      <Navbar />
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <img src={studentProfiles.profile_pic} alt={studentProfiles.first_name + ' ' + studentProfiles.last_name} className="card-img-top" />
            <Link
                to="/dashboard"
                className="nav-link text-dark"
                
              >
                {studentProfiles.first_name.endsWith('s')
                  ? `${studentProfiles.first_name}' Dashboard`
                  : `${studentProfiles.first_name}'s Dashboard`}
              </Link>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              {studentProfiles.middle_name !== null ? (
                <h5 className="card-title mb-0">{studentProfiles.last_name} {studentProfiles.first_name} {studentProfiles.middle_name}</h5>
              ) : (
                <h5 className="card-title mb-0">{studentProfiles.first_name} {studentProfiles.last_name}</h5>
              )}
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <div className="bio">
                <p>{studentProfiles.bio}</p>

                </div>
           
                <tbody>
                  <tr>
                    <th scope="row">Student ID</th>
                    <td>{studentProfiles.student_id}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>{studentProfiles.gender}</td>
                  </tr>
             
              
              
                  <tr>
                    <th scope="row">Department</th>
                    <td>{studentProfiles.department}</td>
                  </tr>
               
              
                  <tr>
                    <th scope="row">Email</th>
                    <td>{studentProfiles.email}</td>
                  </tr>
               
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
