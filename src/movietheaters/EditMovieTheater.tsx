import MovieTheaterForm from "./MovieThreaterForm";

export default function EditMovieTheater(){
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm model={
                {
                    name : "test",
                    latitude : 18.48337192698937,
                    longitude : -69.93994385004045
                }
            }
            
            onSubmit = {values => {
                console.log(values);
            }}

            />
        </>
    )
}