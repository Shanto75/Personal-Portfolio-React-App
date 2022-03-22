import React from "react";

function Qualifications() {
  return (
    <>
      <div className="p-5">
        <strong>
          <h1 className="text-center">Academic Qualifications</h1>
        </strong>
      </div>

      {/* bsc */}
      <h4 className="p-4 bg-dark text-info rounded">
        B.Sc. in Computer Science and Engineering
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Year</th>
            <td>January, 2018 - January, 2022</td>
          </tr>
          <tr>
            <th>Institution</th>
            <td>
              East West University, A/2, Jahurul Islam Avenue, Jahurul Islam
              City, Aftabnagar, Dhaka
            </td>
          </tr>
          <tr>
            <th>Major</th>
            <td>Software and Information System</td>
          </tr>
          <tr>
            <th>Minor</th>
            <td>Intelligent Systems</td>
          </tr>
          <tr>
            <th>Result</th>
            <td>CGPA 3.06 on a scale of 4</td>
          </tr>
        </tbody>
      </table>

      {/* hsc */}
      <h4 className="p-4 bg-dark text-info rounded">
        Higher Secondary Certificate
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Year</th>
            <td>2015 - 2017</td>
          </tr>
          <tr>
            <th>Institution</th>
            <td>Milestone School and College, Uttara, Dhaka</td>
          </tr>
          <tr>
            <th>Group</th>
            <td>Science</td>
          </tr>
          <tr>
            <th>Result</th>
            <td>GPA 4.83 on a scale of 5</td>
          </tr>
        </tbody>
      </table>

      {/* ssc */}
      <h4 className="p-4 bg-dark text-info rounded">
        Secondary School Certificate
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Year</th>
            <td>2013 - 2015</td>
          </tr>
          <tr>
            <th>Institution</th>
            <td>Milestone School and College, Uttara, Dhaka</td>
          </tr>
          <tr>
            <th>Group</th>
            <td>Science</td>
          </tr>
          <tr>
            <th>Result</th>
            <td>GPA 5 on a scale of 5</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Qualifications;
