import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';


const Details = () => {

    const navigate = useNavigate();

    const [individualUser, setIndividual] = useState([]);
    console.log(individualUser);


    //to get user's id
    const { id } = useParams("");
    console.log(id);


    const getData = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setIndividual(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getData();
    }, [])

    //delete data
    const deleteUser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
      
        const deleteData = await res2.json();
        console.log(deleteData);
      
        if (res2.status === 422 || !deleteData) {
            console.log("error");
        } else {
            console.log("user deleted");
            navigate("/")
           
        }
      
      }

       
    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome {`${individualUser.name}`}</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                    <NavLink to={`/edit/${individualUser._id}`}> <button className="btn mx-2"><CreateIcon /></button></NavLink>
                    <button className="btn" onClick={() => deleteUser(individualUser._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
                            <h3 className="mt-3">Name: <span >{individualUser.name}</span></h3>
                            <h3 className="mt-3">Date of Birth: <span >{individualUser.dob}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{individualUser.email}</span></p>
                            {/* <p className="mt-3"><WorkIcon />Address: <span>{individualUser.address}</span></p>
                            <p className="mt-3"><WorkIcon />Country: <span>{individualUser.country}</span></p> */}
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />Address: <span>{individualUser.address}</span></p>
                            <p className="mt-3"><LocationOnIcon />Country: <span>{individualUser.country}</span></p>
                            {/* <p className="mt-3">Description: <span>{individualUser.desc}</span></p> */}
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details