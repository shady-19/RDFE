import React from 'react';
import  { useState } from 'react';
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
import { useNavigate } from 'react-router-dom'

import Lheader from '../Lheader';

const Addbook =() => {

  const navigate = useNavigate();

  const [bname, setBname] = useState("")
  const [author, setAuthor] = useState("")
  // const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [about, setAbout] = useState("")

  const addbook = () => {
    const data = {
      "bname": bname,
      "author": author,  
      "subject" : subject,
      "about" : about

    }

    axios.post('http://127.0.0.1:8000/api/breg/', data).then(res => {

      console.log(res.data)
    },alert("The Book has been added to your List")
    )
  }


  return (
    <div> 
      <Lheader></Lheader>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Add Book Here</h2>


              <MDBInput wrapperClass='mb-4 w-100'
                onChange={(event) => { setBname(event.target.value) }} 
              label='Book Name' id='formControlLg' type='text' size="lg"/>

              <MDBInput wrapperClass='mb-4 w-100' 
                onChange={(event) => { setAuthor(event.target.value) }} 
              label='Author Name' id='formControlLg' type='text' size="lg"/>


               <MDBInput wrapperClass='mb-4 w-100'
                 onChange={(event) => { setAbout(event.target.value) }} 
               label='Genere' id='formControlLg' type='text' size="lg"/>

               <MDBInput wrapperClass='mb-4 w-100'
                 onChange={(event) => { setSubject(event.target.value) }} 
               label='About' id='formControlLg' type='text' size="lg"/>


              <MDBBtn onClick={addbook} size='lg'>
                ADD BOOK 
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

export default Addbook;