import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./Style.css";

function Export2Word() {
  console.log(11);
  var element = "exportContent";
  var filename = "word,docx";
  var preHtml =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";
  var html = preHtml + document.getElementById(element).innerHTML + postHtml;

  var blob = new Blob(["\ufeff", html], {
    type: "application/msword",
  });

  // Specify link url
  var url =
    "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

  // Specify file name
  filename = filename ? filename + ".doc" : "document.doc";

  // Create download link element
  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }

  document.body.removeChild(downloadLink);
  console.log(10);
}

function Viewer() {
    

  const company_name = " ABC Pvt Ltd";
  const [currentDate, setcurrentDate] = useState("");
  const [CompanyName, setCompanyName] = useState(company_name);
  const [Type_of_loan, setType_of_loan] = useState("");
  const [numberofyears, setnumberofyears] = useState("one");
  const [borrowertype, setborrowertype] = useState("");

  const options = [
    { label: "Term Loan", value: "Term Loan" },
    {
      label: "Business Correspondence limits",
      value: "Business Correspondence limits",
    },
    {
      label: "Any other mutually agreed Product",
      value: "Any other mutually agreed Product",
    },
  ];

  const changeDate = (event) => {
    const newVal = event.target.value;
    setcurrentDate(newVal);
  };

  const changeName = (event) => {
    var newVal = event.target.value;
    // if (newVal === "") newVal = company_name;
    setCompanyName(newVal);
  };

  const LoanType = (val) => {
    // const SelectedValue=event.target.value;
    setType_of_loan(val);
    // console.log(Type_of_loan);
    // console.log(SelectedValue);
  };

  const NoOfYears = (event) => {
    const NOY = event.target.value;
    setnumberofyears(NOY);
    console.log(NOY);
  };

  const BorrowerType = (event) => {
    const Type = event.target.value;
    setborrowertype(Type);
  };

  return (
    <div className="containeer">
      {/* <input type="text" name="" id="" onChange={(e) =>
                setcurrentDate(e.target.value)
              } /> */}
      <div className="inputdata">
        <div class="allinput">
          <b>Date of the Mandate </b>
          <input
            type="date"
            value={currentDate}
            name=""
            id=""
            className="inputDate"
            onChange={changeDate}
          />
        </div>

        <div class="allinput">
          <b>Name of the Company </b>
          <input
            type="text"
            className="inputname"
            value={CompanyName}
            placeholder="company name eg ABC Pvt Ltd."
            name=""
            id=""
            onChange={changeName}
          />
        </div>

        <div class="allinput">
          <b>Types of Loan </b>
          <MultiSelect
            className="inputloantype"
            onChange={LoanType}
            options={options}
          />

          {/* <select class="form-select" id="loan-type"  onChange={LoanType} aria-label="Default select example">
            <option selected></option>
            <option value="Term Loan">Term Loan</option>
            <option value="Bussiness Correspondence Limit Loan">Bussiness Correspondence Limit Loan</option>
            <option value="Any other Type of Loan">Any other Type of Loan</option>
          </select> */}
        </div>

        <div class="allinput">
          <b>Number of Years </b>
          <select
            class="form-select"
            id="loan-type"
            className="inputname"
            onChange={NoOfYears}
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="one">One Year</option>
            <option value="two"> Two Year</option>
            <option value="three">Three Year</option>
          </select>
        </div>

        <div class="allinput">
          <b>Borrower Type </b>
          <select
            class="form-select"
            id="loan-type"
            className="inputname"
            onChange={BorrowerType}
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="NBFC and Private Sector Lender">
              NBFC and Private Sector Lender
            </option>
            <option value="From PSUs"> From PSUs</option>
          </select>
        </div>

        <div class="allinput">
          <b>Fees </b>
          <input
            type="text"
            className="inputname"
            value={numberofyears}
            placeholder="Fees"
            name=""
            id=""
            // onChange={changeName}
          />
        </div>

        <button onClick={Export2Word} className="downloadbutton">Export to Word</button>
      </div>

      <div  className="letterdata" id="exportContent"   >
        <h3 className="centerheading" style={{ marginleft:"30cm" }}>
          On the LetterHead of Borrower
        </h3>
        <div className="letterinput">
          <p id="left">{currentDate}</p>
          <p>
            <b>Express Rupya - Proprietor Anita Khandelwal</b>
            <br />
              <b>
              A/4 Chandrika Building, Shankar Lane, Kandivali West, Mumbai
              -400067
            </b>
          </p>

          <span>Kind Attn : Anita Khandelwal</span>

          <p>
            <u>
              {" "}
              <b>Sub : Appointment Letter for Raising funds for</b> {" "}
              <b>{CompanyName}</b>
            </u>
          </p>

          <span>Dear Madam,</span>

          <p>
            <span>
              We refer to our ongoing discussions with you for providing
              advisory services to {" "}
              <b>{CompanyName}</b>. We agree to appoint Express Rupya for
              helping us in raising funds from identified financial Institutions
              on the Following terms :
            </span>
          </p>

          <div className="center">
            <table style={{  border: '1px solid black'}}>
              <tr>
                <th style={{  border: '1px solid black'}}>Particulars</th>
                <th style={{  border: '1px solid black'}}>Particulars</th>
              </tr>

              <tr>
                <td style={{  border: '1px solid black'}}>Facility Amount</td>
                <td style={{  border: '1px solid black'}}>Any</td>
              </tr>

              <tr>
                <td style={{  border: '1px solid black'}}>Tenor</td>
                <td style={{  border: '1px solid black'}}>Mutually agreed terms between Facility </td>
              </tr>

              <tr>
                <td style={{  border: '1px solid black'}}>Collateral</td>
                <td style={{  border: '1px solid black'}}>
                  Provider and <span>{CompanyName}</span>
                </td>
              </tr>

              <tr>
                <td style={{  border: '1px solid black'}}>Tentative Interst range and processing fees</td>
                <td style={{  border: '1px solid black'}}></td>
              </tr>
            </table>
          </div>

          
            <b>
              We have also limited outlined the broadscope of services and agree
              to pay the fees mentioned below on successful close of transaction
            </b>
          

            <br />
            <br />
            {" "}
            <b>Scope of Services</b>
          <ul>
            <li>
              To Introduce and coordinate with various financial Institutions to
              Raise Finance through {Type_of_loan}.
              <br />
              {/* Term Loan / Bussiness Correspondence limits or
            any other mutually agreed product . */}
            </li>
             <br />
            <li>
              Obtaining a term sheet from the lenders in respect of funding  
            </li>
             <br />
            <li>Assist in negotiation process  </li>
             <br />
            <li>Coordinate with various stakeholders involved  </li>
             <br />
            <li>Assist in Post transactional activities</li>
          </ul>

          
            <b>Fees and Payment Term</b>
          <br/>
          <span>We agree to pay you the fees as per below terms </span>
            <br />
            <br />
          <table style={{  border: '1px solid black'}}>
            <tr>
              <th style={{  border: '1px solid black'}}>Type of Funding</th>
              <th style={{  border: '1px solid black'}}>Fees</th>
              <th style={{  border: '1px solid black'}}>Terms of Payment</th>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}>
                {Type_of_loan}
                {/* <MultiSelect
        onChange={LoanType}
        options={options}
      />
              {/* Term Loan/Bussiness Correspondence limits or any other mutually */}
              </td>
              <td style={{  border: '1px solid black'}}>
                {borrowertype}
                {/* From NBFS and private sector lenders */}
              </td>
              <td style={{  border: '1px solid black'}}>
                Within 7 days of raising the invoice. Invoice to be raised post
                disbursement of first tranche.
              </td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}></td>
              <td style={{  border: '1px solid black'}}>
                1 % of sanction amount (lender wise) plus applicable taxes on
                all sanctions in 1 year
              </td>
              <td style={{  border: '1px solid black'}}> For 1 year</td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}></td>
              <td style={{  border: '1px solid black'}}>
                0.75 % of sanction amount (lender wise) plus applicable taxes on
                all sanctions in 2 year
              </td>
              <td style={{  border: '1px solid black'}}> For 2 year</td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}></td>
              <td style={{  border: '1px solid black'}}>
                0.50 % of sanction amount (lender wise) plus applicable taxes on
                all sanctions in 3 year
              </td>
              <td style={{  border: '1px solid black'}}> For 3 year</td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}>
                {Type_of_loan}
                {/* Term Loan/Bussiness Correspondence limits or any other mutually
              agreed product */}
              </td>
              <td style={{  border: '1px solid black'}}>From PSUs</td>
              <td style={{  border: '1px solid black'}}> For 3 year</td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}></td>
              <td style={{  border: '1px solid black'}}>
                2 % of sanction amount (lender wise) plus applicable taxes on
                all sanctions in 1 year
              </td>
              <td style={{  border: '1px solid black'}}> For 1 year</td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}></td>
              <td style={{  border: '1px solid black'}}>
                1.50 % of sanction amount (lender wise) plus applicable taxes on
                all sanctions in 2 year
              </td>
              <td style={{  border: '1px solid black'}}> For 2 year</td>
            </tr>

            <tr>
              <td style={{  border: '1px solid black'}}></td>
              <td style={{  border: '1px solid black'}}>
                {" "}
                1 % of sanction amount (lender wise) plus applicable taxes on
                all sanctions in 3 year
              </td>
              <td style={{  border: '1px solid black'}}> For 3 year</td>
            </tr>
          </table>

          <p>
            {" "}
            We hereby agree that we will not enter into any agreement with
            lenders identified and agreed to between <b>{CompanyName}</b> and
            Express Rupya without involving Express Rupya for {numberofyears}{" "}
            {" years "}
            {/* three years */}
            from the date of this letter .
          </p>
     
          <p>
            {" "}
            Both <b>{CompanyName}</b> and Express Rupya may terminate the
            mandate by giving 90 (ninety-days) written notice to each other,
            but <b>{CompanyName}</b> will be required to pay all fees which have
            accured to EXPRESS RUPYA as per the terms mentioned above.
          </p>
          <p>
            Please find below a list of Existent Lenders as per the terms
            mentioned above
          </p>

          <p>
            <b>Existing Lenders / Negative List of Lenders</b>
          </p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <span id="left">
            <b>Concillaton</b>
          </span>
          <p>
            If any dispute or differences arises between the parties hereto with
            respect to the subject matter of this mandate or interpretation of
            enforcement of one or more of the clause or clauses herein contained
            , the same shall be resolved through Concillation
          </p>
          <br />
          <br />
          <p id="left">
            For <b>{CompanyName}</b>
          </p>
          <br />

          <p id="left">
            <b>Authorised Signatory</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Viewer;
