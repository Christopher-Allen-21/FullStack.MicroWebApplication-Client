import React from 'react';
import '../../styling/Pages/Upload.css'

// axios allows us to consume REST APIs
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class Upload extends React.Component {

        /* Initial state */
        state = {
            // No file selected initially
            selectedFile: null,
            uploadResponse: null
        };

        // Event that will set the state on file select
        onFileChange = (event) => {
            this.setState( {selectedFile: event.target.files[0]} )
        };

        onFileUpload = (event) => {
            // Create new formData object
            // FormData interface allows you to construct key/value pairs representing fields and their values
            // Can then be sent using XMLHttpRequest.send()
            // Uses same format a form would use if encoding type were "multipart/form-data"
            const formData = new FormData();

            formData.append(
                "file",
                this.state.selectedFile,
                this.state.selectedFile.name
            );

            axios.post("http://localhost:8090/file/upload", formData).then( response => {
                    this.setState( {uploadResponse: response } )
                }
            );
        }

        fileData = () => {

            if (this.state.selectedFile) {
                return (
                    <div>
                        <br />
                        <p>File Name: {this.state.selectedFile.name}</p>
                        <p>File Type: {this.state.selectedFile.type}</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <br />
                        Click 'Choose File' above to select a file to upload.
                    </div>
                )
            }
        }

        render() {
            return (
                <>
                    <h1>Upload a Video</h1>
                    <div>
                        <input type="file" accept=".mp4" onChange={this.onFileChange}/>
                        <p />
                        <Button variant="secondary" onClick={this.onFileUpload}>
                            Upload
                        </Button>
                    </div>
                    <p />
                    <div>
                        {this.state.uploadResponse}
                        <h4>File Details: </h4>
                        {this.fileData()}
                    </div>
                </>
            );
        }
}

export default Upload;
