import React, {useState} from 'react';
import './Department.css'

const Department = (props) => {
    let [text, setText] = useState('mango');

    let changeValue = () => {
        setText('Banana')
    }



    return (
        <div className="students">
            <h2>Programming Dept.</h2>
            <div className="hold">
                {
                    <div className="student">
                        <div className="student__details" >
                            <li  className="student__name">Name</li>
                            <span className="student__age">Age</span>
                            <small className="students__mat">{text}</small>
                            <button onClick={changeValue}>Change</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Department
