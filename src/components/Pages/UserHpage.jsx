import React,{useState} from 'react'
import  UserHeader from '../UserHeader'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';




const UserHpage = () => {

const navigate = useNavigate();

const uname=localStorage.getItem('uname')
const uemail=localStorage.getItem('uemail')

const logout = () => {
  localStorage.removeItem('uname')
  localStorage.removeItem('uemail')
navigate('/')
}

  return (
    <div>
      <UserHeader></UserHeader>
      <MDBCard className="position-absolute top-50 start-50 translate-middle" style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://img.freepik.com/free-vector/girl-picking-book_53876-16966.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>


            <MDBCardTitle>Hey {uname}  </MDBCardTitle>
            <MDBCardText>
             We Welcome you to Our Library. You can <br></br>
             Toggle between your navigation Menu to look out for books and issue them.<br></br>
             <b>Thankyou for using our Service!!!!!!</b>

            </MDBCardText>
            <Button 
           
            variant="danger"
            onClick={logout}
            >Logout</Button>{' '}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      
    </div>
  )
}

export default UserHpage
