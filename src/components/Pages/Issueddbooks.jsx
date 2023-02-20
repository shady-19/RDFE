import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import UserHeader from '../UserHeader'

const Issueddbooks = () => {


    const navigate = useNavigate();
const navigatebooks = () => {
 navigate('/issue');
  };
    const app_base_url="http://127.0.0.1:8000/api/returnbook"

    const returnBook=(oid)=>{
        axios.delete(`${app_base_url}/${oid}`).then(
            (response)=>{
               alert("Book Returned")
            },
            (error)=>{
                console.log(error)
            }
        )
    }

  const [anchorEl, setAnchorEl] = useState([]);

  axios.get('http://127.0.0.1:8000/api/issuedbooks/').then(res => {

  setAnchorEl(res.data)

  console.log(res.data)
})

  return (
    <div>
    <UserHeader></UserHeader>
      <section>   
   <table class="table table-hover table-fixed">      
       <thead>
           <tr>
               <th>Oid</th>
               <th>Book Name</th>
               <th>Date Issued</th>
               <th>Expiry</th>
               <th>Actions</th>
               
           </tr>
       </thead>   
   </table>
</section>

{
                anchorEl.map((value, key) => {
                    return (
                        <div>


                            <section>

                                <table class="table table-hover table-fixed">



                                    <tbody>
                                        <tr>
                                            <th scope="row"> {value.oid} </th>
                                            <td>{localStorage.bname}</td>
                                            <td>{value.issued}</td>
                                            <td>{value.expiry}</td>

                                            <td>
                                                <Button variant="danger"
                                                onClick={() => {
                                                    returnBook(value.oid);
                                                }
                                                
                                                } 
                                                
                                                >Return</Button>{' '} 
                                               
                                                <Button onClick={navigatebooks} variant="success">Renew</Button>

                                                </td>


                                        </tr>

                                    </tbody>

                                </table>

                            </section>



                        </div>
                    )
                })
            }




    </div>
    
  )
}

export default Issueddbooks
