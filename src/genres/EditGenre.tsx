import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function EditGenre(){
    const {id}: any = useParams();
    return (
        <>
            <h3>Edit Genre</h3>
            The id is {id}

            <GenreForm model={{name : id}} 
            onSubmit = 
              {async value => {
                 //When the form is posted.
                 await new Promise(r => setTimeout(r,3000));
                 await console.log(value);
             }}

            />

        </>
    )
}