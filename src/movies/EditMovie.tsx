import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function EditMovie(){

    const nonSelectedGenres:genreDTO[] = [{id:2, name:"Drama"}]
    const SelectedGenres:genreDTO[] = [{id:1, name:"Comedy"}]

    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm 
                model={{
                    title : 'Yoy Story',
                    inTheaters : true,
                    trailer : 'url',
                    releaseDate : new Date()
                }}

            onSubmit = {(values) => {
                console.log(values); 
             }
            }

            selectedGenres = {SelectedGenres}
            nonSelectedGenres = {nonSelectedGenres}
            />
        </>
    )
}