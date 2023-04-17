import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
let fileToDisplay = "http://localhost:3000/image/SWE2.jpg";

function DragDrop() {
  const [file, setFile] = useState(null);
    const handleChange = async(file) => {
        setFile(file);
        const data = new FormData()
        data.append('file', file)
        await fetch("/upload/Images",
        {
            method: 'post',
            body: data
        });
        fileToDisplay = "http://localhost:3000/image/" + file.name
    };

    return (
        <div>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
            <div>
                <img src = {fileToDisplay}  style={{width: "1200px", height: "675px"}}></img>
            </div>
        </div>
  );
}

export default DragDrop;