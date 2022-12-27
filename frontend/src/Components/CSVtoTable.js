import React, { useState } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

export default function CSVtoTable() {
  const [csvFile, setCsvFile] = useState();
  const [csvData, setCsvData] = useState();
  const [message, setMessage] = useState("Currently No Message to Show");
  const [valid, setValid] = useState(true);

  const handleInputFile = (e) => {
    setCsvFile(e.target.files[0]);
    const fileName = e.target.files[0].name;
    const fileExt = fileName.split(".")[1];
    //console.log(fileName + "  " + fileExt);
    if (!["csv", "xls", "xlsx"].includes(fileExt)) {
      setMessage("Please Enter a Valid CSV file");
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (csvFile) {
      convertCSVtoText();
    }
  };
  const handleReset = () => {
    setCsvFile(null);
    setCsvData();
    setValid(true);
    setMessage("Please Choose a New CSV File");
  };
  const convertCSVtoText = () => {
    const clonedCsvFile = csvFile;

    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      //console.log(text);
      setCsvData(text);
    };
    reader.readAsText(clonedCsvFile);
    // learn more about readAsText
    // Link : https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText
  };

  return (
    <>
      <form className="mt-36">
        <input
          className="form-control"
          type="file"
          onChange={handleInputFile}
        />
        <button
          className="btn btn-outline-success"
          disabled={valid}
          onClick={handleSubmit}
        >
          Convert
        </button>
        <button
          type="button"
          disabled={valid}
          className="btn btn-outline-danger m-3"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
      

      
      <CsvToHtmlTable
        data={csvData}
        csvDelimiter=","
        hasHeader="true"
        tableClassName="table table-hover table-striped table-hovered table-bordered"
      />
    </>
  );
}
