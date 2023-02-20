import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
import Lheader from '../Lheader';


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

const Updatebook = () => {

    const [bname, setBname] = useState("")
    const [author, setAuthor] = useState("")
    const [subject, setSubject] = useState("")
    const [about, setAbout] = useState("")

   
  const navigate = useNavigate();
    
    const b=  localStorage.getItem("bid")
    console.log(b)

      const updateBook = () => {

        const data = {
            "bname": bname,
            "author": author,  
            "subject" : subject,
            "about" : about
      
          }
        const addb="http://127.0.0.1:8000/api/update"
        axios.put(`${addb}/${b}`,data).then(
            response => {
               console.log(response.data)
            },alert("The Book has been Updated")       
        )
        navigate("/books")
    }


  return (
    <div>
        <Lheader></Lheader>
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Update Book Here</h2>


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


        <MDBBtn onClick={updateBook}  size='lg'>
          Update  
        </MDBBtn>

        <hr className="my-4" />

       

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Updatebook
