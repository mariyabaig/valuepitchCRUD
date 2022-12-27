import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Home <HomeIcon size={30} />
        </>
      ),
      to: "/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          About <InfoIcon size={30} />
        </>
      ),
      to: "/about",
    },
    {
      id: 3,
      child: (
        <>
          Upload<UploadFileIcon size={30} />
        </>
      ),
      to: "/csvtotable",
    },
    
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, to, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-900" +
              " " +
              style
            }
          >
            <Link
              to ={to}
              className="flex justify-between items-center w-full text-white"
            //   download={download}
            //   target="_blank"
            //   rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;