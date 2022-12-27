import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const Register = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    country: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInput((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };


  const addInput = async (e) => {
    e.preventDefault();
    const { name, email, dob, address, country } = input;

    const res = await fetch("/registeration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, dob, address, country }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      alert("error");
      console.log("error ");
    } else {
      alert("data added");

      navigate("/");
    }
  };

  return (
    <>
      <div className="container">
        <form className="mt-4">
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name <BadgeOutlinedIcon />
              </label>
              <input
                type="text"
                onChange={setData}
                value={input.name}
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email <MarkunreadOutlinedIcon/>
              </label>
              <input
                type="email"
                onChange={setData}
                value={input.email}
                name="email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Date of birth <CalendarMonthOutlinedIcon/>
              </label>
              <input
                type="date"
                id="Test_DatetimeLocal"
                onChange={setData}
                name="dob"
                value={input.dob}
                className="form-control"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address <BusinessOutlinedIcon/>
              </label>
              <input
                type="text"
                onChange={setData}
                name="address"
                value={input.address}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Country <PublicOutlinedIcon />
              </label>
              <input
                type="text"
                onChange={setData}
                value={input.country}
                name="country"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <button onClick={addInput}  className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
