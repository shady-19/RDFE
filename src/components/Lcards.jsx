import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

import { useState } from 'react';
import axios from 'axios';



const Lcards = () => {

       const navigate = useNavigate();

    const app_base_url = "http://127.0.0.1:8000/api/books"
    const deleteBooks = (bid) => {
        axios.delete(`${app_base_url}/${bid}`).then(
            (response) => {
                alert("Book Deleted")
            },
            (error) => {
                console.log(error)
            }
        )
    }


    const base_url = "http://127.0.0.1:8000/api/update"

   





    const [anchorEl, setAnchorEl] = useState([]);

    axios.get('http://127.0.0.1:8000/api/getallbooks/').then(res => {
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
                            <th>Author</th>
                            <th>Genere</th>
                            <th>About</th>
                            <th>Action</th>
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
                                            <th scope="row"> {value.bid} </th>
                                            <td>{value.bname}</td>
                                            <td>{value.author}</td>
                                            <td>{value.subject}</td>
                                            <td>{value.about}</td>
                                            <td><Button

                                                onClick={() => {
                                                  localStorage.setItem("bid",value.bid)
                                                  navigate("/ubooks")
                                                }

                                                }

                                                variant="success">Edit</Button></td>
                                            <td><Button
                                                onClick={() => {
                                                    deleteBooks(value.bid);
                                                }

                                                }
                                                variant="danger">Delete</Button></td>


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

export default Lcards
