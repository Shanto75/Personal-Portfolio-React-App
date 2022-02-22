import React, { useState } from 'react'

export default function About() {
    const [btnName, setbtnName] = useState('Dark Mood');

    const [color, setcolor] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const darkMood = ()=>{
        if(color.color === 'black')
        {
            setcolor({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnName('Light Mood')
        }
        else{
            setcolor({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnName('Dark Mood')
        }

    }
    return (
        <>
            <div className="container p-5" style={color}>
                <h1 className='text-center p-2'>About</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Modi saepe, sed impedit expedita ipsam labore vero nostrum quos reiciendis.
                    Minus officiis optio vitae aspernatur iste recusandae
                    placeat corrupti dolorem voluptatum. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Beatae necessitatibus illum aliquam expedita
                    doloremque culpa ducimus quam dignissimos voluptatem repellendus magnam
                    ipsa nostrum debitis, repellat dolores hic officia commodi nihil.</p>

                <table className="table table-borderless" style={color}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>Md. Moniruzzaman Shanto</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>22</td>
                        </tr>
                        <tr>
                            <th>Nationality</th>
                            <td>Bangladeshi</td>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <td>Bangla, English</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>Dhaka, Bangladesh</td>
                        </tr>
                    </tbody>
                </table>

                <div className="form-check form-switch">
                    <input onClick={darkMood} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{btnName}</label>
                </div>
            </div>
        </>

    )
}
