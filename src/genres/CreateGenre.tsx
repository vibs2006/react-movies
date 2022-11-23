import GenreForm from "./GenreForm";


export default function CreateGenre(){
    //const history = useHistory();
    return (
        <>
            <h3>Create Genre</h3>

            <GenreForm model={{name : ''}} 
            onSubmit = 
              {async value => {
                 //When the form is posted.
                 await new Promise(r => setTimeout(r,3000));
                 await console.log(value);
             }}

            />

            {/* <Button onClick={() => {
                // ... saving in the database
                history.push('/genres');
            }}>Save Changes</Button> */}
        </>
    )
}