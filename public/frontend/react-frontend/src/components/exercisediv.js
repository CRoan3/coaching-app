import React, { useState } from "react";
import '../App.css';
import axios from "axios";


function AddExerciseDiv () {
    const Input = () => {
        return <input placeholder="Search for an exercise..." />;
    };
    
    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length}/>));
    };

    return (
        <>
                {inputList}
            <div className="buttonContainer">
                <button onClick={onAddBtnClick}>Add input</button>
            </div>
        </>
    );
    };

export default AddExerciseDiv

