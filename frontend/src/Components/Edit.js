import React from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Edit = () => {
    const [input, setInput] = useState({
        name : "",
        email:"",
        dob:"",
        address:"",
        country:""

    })


const editData=(e)=>{
    console.log(e.target.value)
    const { name, value } = e.target;
        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
}


//useParams used to fetch id of the user
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
        //to set the data in edit
        setInput(data)
        console.log("get data");
    }
}

useEffect(() => {
    getData();
}, [])




  return (
    <>
     <div className="container">
            
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" onChange={editData} value={input.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                        <input type="email"  onChange={editData} value ={input.email} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Date of birth</label>
                        <input type="datetime-local" id="Test_DatetimeLocal" onChange={editData} name="dob" value={input.dob} className="form-control" />
                    </div>
                    
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" onChange={editData}  name="address" value={input.address} className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                        <input type="text" onChange={editData} value={input.country} name="country" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>
                <button className='btn btn-success'>Update Data <BorderColorIcon/></button>
            </form>
        </div>   
    </>
  )
}

export default Edit