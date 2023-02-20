import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';



const Ulist = () => {
    
const app_base_url="http://127.0.0.1:8000/api/udel"

    const deleteUser=(uid)=>{
        axios.delete(`${app_base_url}/${uid}`).then(
            (response)=>{
               alert("Book Deleted")
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    const [anchorEl, setAnchorEl] = useState([]);

    axios.get('http://127.0.0.1:8000/api/getallusers/').then(res => {

        setAnchorEl(res.data)

        console.log(res.data)
    })


    return (
        <div>

            <section>

                <table class="table table-hover table-fixed">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>


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
                                            <th scope="row"> {value.uid} </th>
                                            <td>{value.uname}</td>
                                            <td>{value.uemail}</td>
                                            <td><Button onClick={() => {
                                                deleteUser(value.uid);
                                            }
                                            
                                            } variant="danger">Delete</Button></td>


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

export default Ulist
