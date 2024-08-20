import axios from "axios";
import {useState} from "react";
import React from "react";
import '../App.css';


function Search() {
    const [exercise_name, setName] = useState("");
    const [exercise_url, setVideoURL] = useState("");
    const [exerciseList, setExerciseList] = useState([]);
    
    function getExercise(e) {
        e.preventDefault(e);
        e.stopPropagation(e);
        e.nativeEvent.stopImmediatePropagation();
        axios.get("http://localhost:5000/fitness_app/exercise_videos/" + exercise_name
        )
        .then((res) =>
            {
                for (const data of res.data) {
                    console.log(data.exercise_url)
                    setVideoURL(data.exercise_url)
                    localStorage.setItem('exercise_url', data.exercise_url);
                }
                console.log(res.data);
                setName(exercise_name);
            }
        ).catch(error => {
            alert(error)})
            
            
        const Iframe = () => {
                if (exercise_url === '') {
                    return null;
                } else {
                return <iframe title="iframe"
                    width="420" height="345"
                    name={exercise_url}
                    src={exercise_url || ''}/>
                };
            } 
        setExerciseList(exerciseList.concat(<Iframe key={exerciseList.length}/>));
        };

    return (
      <div>

        <div>
            <form submit="false">
                <div className="form-group">
                <div role="alert">
                    <label htmlFor="exercise-name">Search for an exercise to add to your workout:</label>
                    <input
                        type="text"
                        className="form-input"
                        id="exercise_name"
                        name={exercise_name}
                        value={exercise_name || ''}
                        onChange={e => {
                            setName(e.target.value);
                        }}  />
                </div>
                </div>
                    <button type="submit" className="btn btn-primary mt-4"  onClick=
                        {getExercise}>
                        Search
                    </button>
            </form>
        </div>
        <div className="exerciseContainer">
                {exerciseList}
        </div>

{/*             <div id="exercise-container">
                <h2>Exercises</h2>
            </div> */}



    </div>

    );
    
}

export default Search;
  