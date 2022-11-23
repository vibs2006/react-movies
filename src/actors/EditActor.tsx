import ActorForm from "./ActorForm";

export default function EditActor(){
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model=
            {
                {name : "Test 1", 
                dateOfBirth : new Date("1999-01-01T00:00:00"),
                pictureUrl : "https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg"
                ,biography : `Test **Hellow** of BioGraphy`
            }}
            onSubmit={values => console.log(values)}
            ></ActorForm>
        </>
    )
}