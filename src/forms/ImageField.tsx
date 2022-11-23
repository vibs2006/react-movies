import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function ImageField(props: imageFieldProps){
    const [imageBase64,setImageBase64] = useState("");
    const divStyle = {marginTop: '10px'}, imgStyle = {width: '450px'};
    const [imageURL, setImageURL] = useState(props.imageUrl);
    const {values} = useFormikContext<any>();  
    
    const handleOnChange = (eventArgs:ChangeEvent<HTMLInputElement>) => {
        if (eventArgs.currentTarget.files){
            const file = eventArgs.currentTarget.files[0];
            
            if (file){
                toBase64(file).then( (base64Representation : string) => {
                    setImageBase64(base64Representation);
                })
                .catch((error) => console.error(error));
                values[props.field] = file;
            }
            else{
                setImageBase64("");
            }
        }
    }

    const toBase64 = (file:File) => {
        return new Promise<string>( (resolve,reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result as string);
            }
            reader.onerror = (error) => {
                reject(error);
            }
        });
    }
    
    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <input type="file" accept=".jpg,.jpeg,.png" onChange={handleOnChange} />

            {imageBase64 ? <div style={divStyle}>
                <img style={imgStyle} src={imageBase64} alt="Selected" />
            </div> : null  }

            {imageURL ? <div style={divStyle}>
                <img style={imgStyle} src={imageURL} alt="Selected" />
            </div> : null  }
        
        </div>
    )
}

interface imageFieldProps{
displayName:string;
imageUrl?:string;
field:string;
}

