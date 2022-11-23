import MovieTheaterForm from "./MovieThreaterForm";
import Map from "../utils/Map"
export default function CreateMovieTheater(){
    return (
        <>
            <h3>Create Movie Theater</h3>
            <MovieTheaterForm
                model = {{name:""}}
                onSubmit={values => console.log(values)}
            />

            
        </>
    )
}