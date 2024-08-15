import axios from "axios";
import {useState} from "react";


function Search() {
    const [exercise_name, setName] = useState("");
    const [exercise_url, setVideoURL] = useState("");

    function getExercise(e) {
        e.preventDefault(e);
        e.stopPropagation(e);
        e.nativeEvent.stopImmediatePropagation();
        axios.get("http://localhost:4000/fitness_app/exercise_videos/" + exercise_name
            )
            .then((res) =>
            {
            for (const data of res.data) {
                console.log(data.exercise_url)
                setVideoURL(data.exercise_url)
            }
            console.log(res.data);
            setName(exercise_name);
            }
        ).catch(error => {
            alert(error)})
        };
    return (
      <div>
        <h1 align="center">Exercise Details</h1>
        <div className="container mt-4">
            <form>
                <div className="form-group">
                <div role="alert">
                    <label htmlFor="exercise-name">Exercise Name</label>
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
                <button type="button" className="btn btn-primary mt-4" onClick={getExercise}>
                    Search
                </button>
            </form>

            <br/>

            <div>
                <label>Video URL:
                </label>

                <input className="form-input"
                    name={exercise_url}
                    value={exercise_url || ''}
                     onChange={e => {
                        setVideoURL(e.target.value);
                    }} />

            </div>

        </div>

      </div>

    );
}
  
  
export default Search;
  