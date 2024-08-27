
import React from "react";
import SearchResult from "./SearchResult";
import './SearchResultsList.css';
import {useState, useEffect} from "react";


const SearchResultsList = ({results}) => {
    const [exerciseList, setExerciseList] = useState([]);

    
    function generateExercise({exercise_url, exercise_name}) {
        const Iframe = () => {
                if (exercise_url === '') {
               return null;
               } else { 
               return <div><iframe title="iframe"
               width="420" height="345"
               name={exercise_name}
               src={exercise_url}/><input type="text"/></div>
               ;
               }
           };
           setExerciseList(exerciseList.concat(<Iframe key={exerciseList.length}/>));  
           console.log('test')  
    }     
      
    return (
    <><div className="results-list">
            {results.map((result, id, exercise_name, exercise_url ) => {
                return (<SearchResult generateExercise={generateExercise} exerciseList={exerciseList} result={result} key={id} exercise_name={exercise_name}  exercise_url={exercise_url} />);
            }
            )}
        </div>
        <div className="exercise-list">
            {exerciseList}
        </div>
    </>
    )
}



export default SearchResultsList;
