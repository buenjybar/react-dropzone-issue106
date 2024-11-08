import './App.css';
import Dropzone, {useDropzone} from "react-dropzone";
import {useState} from "react";

function App() {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        onDropAccepted: (acceptedFiles) => {
            setFiles(acceptedFiles)
        }
    })

    return (
        <div className="App">
            <div className="dropZone" {...getRootProps()}>
                {/*<label htmlFor="dropzone" aria-label="dropzone">Drag and drop files here</label>*/}
                <input data-testid="dropzone" {...getInputProps()} />
            </div>
            <div className="files">
                {files.map((f) => <span key={f.name}>{f.name}</span>)}
            </div>
        </div>
    );
}

export default App;
