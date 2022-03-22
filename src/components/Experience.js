import React from "react";

function Experience() {
  return (
    <>
      <h1 className="text-center p-5">Experience</h1>
      <h4 className="p-4 bg-dark text-info rounded">
        Undergraduate Research Experience
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Year</th>
            <td>June, 2021 - January, 2022</td>
          </tr>
          <tr>
            <th>Institution</th>
            <td>
              East West University, A/2, Jahurul Islam Avenue, Jahurul Islam
              City, Aftabnagar, Dhaka, Bangladesh
            </td>
          </tr>
          <tr>
            <th>Details</th>
            <td>
              Study and implementation of real-life application of blockchain
              for online voting system using Ethereum blockchain.
            </td>
          </tr>
          <tr>
            <th>Thesis title</th>
            <td>
              “Decentralized online voting platform based on Ethereum
              blockchain”
            </td>
          </tr>
          <tr>
            <th>Supervisor</th>
            <td>
              Dr. Md. Nawab Yousuf Ali, Professor, Department of Computer
              Science and Engineering, East West University
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Experience;
