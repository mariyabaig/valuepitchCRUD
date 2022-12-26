import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Home = () => {
const navigate = useNavigate();

const goToregister = ()=>{
navigate("/register")
}

const goToEdit = ()=>{
  navigate("/edit")
  }

  const goToDetails = ()=>{
    navigate("/details")
    }


  return (
    <div>
    <div className="container flex flex-col">
      <div className="flex flex-colitems-end">  <button
          onClick={console.log("clicked")}
          className="mt-3 btn btn-primary text-white py-2 px-2"
        >
          Add data
        </button></div>
      
      
      <table className="table table-dark table-striped my-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Address</th>
            <th scope="col">Country</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
        </tbody>
      </table>
      <div className="flex flex-col items-end">  <button className="btn btn-primary pt-2 py-2" onClick = {goToregister}>Register</button></div>
    </div>
    </div>
  );
};

export default Home;
