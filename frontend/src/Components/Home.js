import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import { useEffect,useState } from "react";


const Home = () => {

//useNavigate hook to navigate to another page
const navigate = useNavigate();

const goToregister = ()=>{
navigate("/register")
}

const goToEdit = ()=>{
  navigate("/edit")
  }


//get data on home page
const [getUserdata, setUserdata] = useState([]);
console.log(getUserdata);

const getData = async(e) => { 
  const res = await fetch("/getdata", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  });

  const data = await res.json();
  console.log(data);

  if (res.status === 422 || !data) {
      console.log("error");

  } else {
      setUserdata(data)
      console.log("Data received through get api");

  }
}

useEffect(() => {
  getData();
}, [])


  return (
    <div>
    <div className="container flex flex-col">
      
 <table className="table table-dark table-striped my-3">
        <thead>
          <tr>
          <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Address</th>
            <th scope="col">Country</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
                                getUserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.dob}</td>
                                                <td>{element.address}</td>
                                                <td>{element.country}</td>
                                                <td className="d-flex justify-content-between">
                                                <NavLink to ={`details/${element._id}`}><button className="btn btn-primary mx-3"><RemoveRedEyeIcon/></button></NavLink>
                                                <NavLink to={`edit/${element._id}`}><button className="btn btn-success mx-3"><EditIcon/></button></NavLink>
                                                 <button className="btn btn-danger mx-3"><DeleteIcon/></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }



        </tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <button onClick={goToDetails} className="btn btn-primary mx-3"><RemoveRedEyeIcon/></button>
                <button onClick={goToEdit} className="btn btn-success mx-3"><EditIcon/></button>
                <button className="btn btn-danger mx-3"><DeleteIcon/></button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>
                <button onClick={goToDetails}className="btn btn-primary mx-3"><RemoveRedEyeIcon/></button>
                <button  className="btn btn-success mx-3"><EditIcon/></button>
                <button className="btn btn-danger mx-3"><DeleteIcon/></button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@mdo</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>
                <button onClick={goToDetails} className="btn btn-primary mx-3 "><RemoveRedEyeIcon/></button>
                <button  className="btn btn-success mx-3 "><EditIcon/></button>
                <button className="btn btn-danger mx-3 "><DeleteIcon/></button>
            </td>
            
          </tr>
        </tbody> */}
      </table>
      <div className="flex flex-col items-end">  <button className="btn btn-success pt-2 py-2" onClick = {goToregister}>Add new data <AddIcon/></button></div>
    </div>
    </div>
  );
};

export default Home;
