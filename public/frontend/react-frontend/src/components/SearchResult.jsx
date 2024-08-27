import React from 'react';
import {useState, useEffect} from "react";



const SearchResult = ({result, generateExercise, exercise_url, exercise_name}) => {

    return (
        <button onClick={generateExercise}>{result.exercise_name}</button>
    )
}


export default SearchResult;
