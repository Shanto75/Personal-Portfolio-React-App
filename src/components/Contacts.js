import React from "react";

function Contacts() {
  return (
    <>
      <div className="col-8 mx-auto">
        <h1 className="text-center pt-4">Contact details</h1>
        <table className="table table-borderless d-flex justify-content-center">
          <tbody>
            <tr>
              <th>Email</th>
              <td>ms.shanto1234@gmail.com</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>017123123123</td>
            </tr>
            <tr>
              <th>GitHub</th>
              <td>
                <a
                  className="alert-link"
                  href="https://github.com/Shanto75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Shanto75
                </a>
              </td>
            </tr>
            <tr>
              <th>LinkedIn</th>
              <td>
                <a
                  className="alert-link"
                  href="https://linkedin.com/in/mzshanto1234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mzshanto1234
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-8 mx-auto">
        <div className="p-4 text-center">
          <strong>
            <h1>Send feedback</h1>
          </strong>
        </div>
        <div className="form-floating col-md-8 mx-auto mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Name</label>
        </div>
        <div className="form-floating col-md-8 mx-auto mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating col-md-8 mx-auto mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Mobile Number</label>
        </div>
        <div className="form-floating col-md-8 mx-auto mb-2">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
          ></textarea>
          <label>Write any message</label>
        </div>
        <div className="d-grid col-3 mx-auto py-4">
          <button className="btn btn-outline-info" type="button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contacts;
