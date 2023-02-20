import React, { useState } from 'react';
import axios from 'axios';

import Header from '../Header';
// import './Userlogin.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';
import Lheader from '../Lheader';

function UserReg() {

  const [uname, setName] = useState("")
  const [uemail, setEmail] = useState("")
  const [upassword, setPassword] = useState("")

  const registeruser = () => {
    const data = {
      "uname": uname,
      "uemail": uemail,
      "upassword": upassword
    }

    axios.post('http://127.0.0.1:8000/api/ureg/', data).then(res => {

      console.log(res.data)
    }, alert("User Registered!!!!! Please Login")
    )

    // navigate('/login');
    window.location.reload(true);


  }

  return (
    <div> 
      <Lheader></Lheader>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              

              <MDBInput wrapperClass='mb-4 w-100'
                 onChange={(event) => { setName(event.target.value) }} 
              
              label='Name' id='formControlLg' type='email' size="lg"/>

              <MDBInput wrapperClass='mb-4 w-100'
                 onChange={(event) => { setEmail(event.target.value) }} 
              
              label='Email address' id='formControlLg' type='email' size="lg"/>
              
              <MDBInput wrapperClass='mb-4 w-100' 
                 onChange={(event) => { setPassword(event.target.value) }} 
              
              label='Password' id='formControlLg' type='password' size="lg"/>


              <MDBBtn onClick={registeruser} size='lg'>
                Register User
              </MDBBtn>

              <hr className="my-4" />

             

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div >
  );
}

export default UserReg;