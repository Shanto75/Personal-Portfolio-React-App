import React from "react";

function Projects() {
  return (
    <>
      <h1 className="text-center p-5">Projects</h1>
      <h4 className="p-4 bg-dark text-info rounded">
        Decentralized Online Voting Platform
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Details</th>
            <td>
              Developed a decentralized online voting system based on Ethereum
              blockchain using HTML, CSS, JavaScript, Bootstrap framework for
              frontend and Nodejs, Solidity, Truffle and Web3.Js for backend.
            </td>
          </tr>
          <tr>
            <th>Source</th>
            <td>
              <a
                className="alert-link"
                href="https://github.com/Shanto75/Decentralized-Online-Voting-Platform-Based-on-Ethereum-Blockchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Projects;
