import React from 'react'
import { useState, useEffect} from 'react'
import {useParams,useNavigate  } from 'react-router-dom'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Edit = () => {
    const [input, setInput] = useState({
        name : "",
        email:"",
        dob:"",
        address:"",
        country:""

    })

//to redirect to home page after updation
const navigate = useNavigate();


const editData=(e)=>{
    // console.log(e.target.value)
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
    // console.log(id);


const getData = async () => {

    const res = await fetch(`/getuser/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
        // console.log("error ");
        

    } else {
        //to show existing the data in edit
        setInput(data)
        // console.log("get data");
        
    }
}

useEffect(() => {
    getData();
}, [])



//update the data of individual user
const updateUser = async(e)=>{
    e.preventDefault();
    const {name,email,dob,address,country}= input;
    const res2 = await fetch(`/updateuser/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name,email,dob,address,country
        
        })
    });
    const data2 = await res2.json();
    // console.log(data2);

    if (res2.status === 422 || !data2) {
        // console.log("error ");

    } else {
        //to set the data in edit
        setInput(data2)
        // console.log("get data");
        navigate("/")
    
}
    


}

  return (
    <>
     <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
            
            <form className="form" style={{"marginTop":"120px" , "marginRight" :"12px" , "marginLeft":"12px"  }}>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" onChange={editData} value={input.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email"  onChange={editData} value ={input.email} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
                        <input type="date" id="Test_DatetimeLocal" onChange={editData} name="dob" value={input.dob} className="form-control" />
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
                <button type="submit" onClick={updateUser} className='btn bg-slate-700 text-slate-100'>Update Data <BorderColorIcon/></button>
            </form>
        </div>   
    </>
  )
}

export default Edit