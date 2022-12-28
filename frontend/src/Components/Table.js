import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { CSVLink } from "react-csv";
import { ListItem } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Table = () => {
  //useNavigate hook to navigate to another page
  const navigate = useNavigate();

  const goToregister = () => {
    navigate("/register");
  };

  //get data on Table page
  const [getUserdata, setUserdata] = useState([]);
  console.log(getUserdata);

  const getData = async (e) => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("Data received through get api");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //delete a user
  const deleteUser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deleteData = await res2.json();
    console.log(deleteData);

    if (res2.status === 422 || !deleteData) {
      console.log("error");
    } else {
      console.log("user deleted");
      getData();
    }
  };

  //search filter
  const [search, setSearch] = useState("");

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Date of Birth", key: "dob" },
    { label: "Address", key: "address" },
    { label: "Country", key: "country" },
  ];

  return (
    <>
    <div className="min-[320px]:h-screen w-screen">
      <section className="min-[320px]:text-center antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">



          <div className="w-full max-w-4xl mx-auto sm:mt-32 md:mt-32 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 max-[375px]:pt-32">
                Users
                <button
                  className="btn ml-3 btn-sm"
                  onClick={goToregister}
                >
                  <AddIcon />
                </button>
                <input type="text" className="py-2 px-3 float-right flex flex-col border  border-blue-900 sm:my-3"  placeholder="Search"  onChange={(e)=>{
  setSearch(e.target.value)
}}></input>
              </h2>
              
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full" id="table-to-xls">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Date of Birth
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Address</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {getUserdata
                      .filter((element) => {
                        return search.toLowerCase() === ""
                          ? element
                          : element.name.toLowerCase().includes(search);
                      })
                      .map((element) => {
                        return (
                          <tr key={element.id}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                {element.name}
                                <div className="font-medium text-gray-800"></div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center">{element.email}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center ">{element.dob}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center">
                                {element.address}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center">
                                {element.country}
                              </div>
                            </td>
                            <td className="justify-content-between">
                              <NavLink to={`details/${element._id}`}>
                                <button className="btn btn-sm mx-3 my-1">
                                  <RemoveRedEyeIcon />
                                </button>
                              </NavLink>
                              <NavLink to={`edit/${element._id}`}>
                                <button className="btn btn-sm mx-3 my-1">
                                  <EditIcon />
                                </button>
                              </NavLink>
                              <button
                                onClick={() => deleteUser(element._id)}
                                className="btn btn-sm mx-3 my-1"
                              >
                                <DeleteIcon />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-0 mb-6 flex flex-row justify-center items-center">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="bg-green-700 py-2 px-2 mx-3 text-white rounded download-table-xls-button "
          table="table-to-xls"
          filename="tablecsv"
          sheet="tablecsv"
          buttonText="Export table to Excel"
        />

        <CSVLink
          data={getUserdata}
          headers={headers}
          filename={"table.csv"}
          className="bg-green-700 py-2 px-2 text-white rounded "
        >
          Export table to CSV
        </CSVLink>
      </div>
      </div>
    </>
  );
};

export default Table;
