import React from "react";

function About() {
  return (
    <>
      <h1 className="text-center p-5">About</h1>
      <p align="justify">
        Hello there! I am Moniruzzaman Shanto. An
        <strong> Engineer, Problem solver and Designer. </strong>
        Completed B.Sc. in Computer Science and Engineering from East West
        University, Dhaka, Bangladesh. I am Interested in Problem solving,
        designing, software and web development. Moreover, I like to do
        Photography, Image Editing and Manipulation in the free time . Objective
        is to work throughout the software and web development, maintenance,
        information technology or similar sectors of various public and
        corporate institutions in Bangladesh or internationally, and to advance
        rapidly with growing responsibilities.
      </p>

      <h4 className="bg-dark text-info text-center p-4 mt-5">
        Personal Details
      </h4>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Md. Moniruzzaman Shanto</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>27th August, 1999</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>Bangladeshi</td>
          </tr>
          <tr>
            <th>Marital Status</th>
            <td>Single</td>
          </tr>
          <tr>
            <th>Blood Group</th>
            <td>B+</td>
          </tr>
          <tr>
            <th>NID Number</th>
            <td>7357596845</td>
          </tr>
          <tr>
            <th>Present Address</th>
            <td>Dhaka, Bangladesh</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default About;
