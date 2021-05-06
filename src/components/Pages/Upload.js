import React from 'react';
import '../../styling/Pages/Upload.css'

// axios allows us to consume REST APIs
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Upload extends React.Component {
        constructor(props) {
            super(props);
        }

        /* Initial state */
        state = {
            // No file selected initially
            selectedFile: null,
            uploadResponse: null,
            videoTitle: null,
            videoCategory: null,
            videoDescription: null,
            videoId: [],
        };

        // HANDLING STATE CHANGES
        onFileChange = (event) => {
            this.setState( { selectedFile: event.target.files[0] } )
        };

        onTitleChange = (event) => {
            this.setState( { videoTitle: event.target.value } )
        };

        onCategoryChange = (event) => {
            this.setState( {videoCategory: event.target.value })
        }

        onDescriptionChange = (event) => {
            this.setState( {videoDescription: event.target.value })
        }

        // Create FormData Object, Append File Info To It, POST Request
        onFileUpload = (event) => {
            const formData = new FormData();

            formData.append(
                "file",
                this.state.selectedFile
            );

            let videoId = [];
            axios.post("http://localhost:8090/file/upload", formData)
                .then( response => {
                    this.setState( { videoId: [response.data] })
                    videoId = [response.data];
                    return response.data;
                }).catch( error => alert('post' + error.message + ' ' + error.data + ' ' + error.response))
                .finally( (videoId) => {
                    if (this.state.videoId !== []) {this.sendPatchRequest(videoId)}
                } );


        };

        // Update video info in RDS
        sendPatchRequest = () => {
            let today = new Date().toISOString().slice(0, 10);
            axios.patch(`http://localhost:8090/video/${this.state.videoId}`,
                { title: this.state.videoTitle, description: this.state.videoDescription, videoPostedDate: today, category: this.state.videoCategory}
            )
                .then( response => {
                    this.setState( {uploadResponse: `Video uploaded successfully! Video id is: ${this.state.videoId}`} );
                    alert(response.data);
                })
                .catch( error => alert('patch' + error.message + ' ' + error.data + ' ' + error.response))
                .finally( () => this.setState( { videoId: null }));
        }


        // Display Info on the File the User Chose
        fileData = () => {
            if (this.state.selectedFile) {
                let sizeInMB = (this.state.selectedFile.size / (1024 * 1024)).toFixed(1);
                return (
                    <div>
                        <br />
                        <p>File Name: {this.state.selectedFile.name}</p>
                        <p>File Type: {this.state.selectedFile.type}</p>
                        <p>File Size: {sizeInMB} MB</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        Click 'Choose File' above to select a video file to upload.
                    </div>
                )
            }
        }

        // Disable the Upload Button if Not All Required Info Present
        disableUploadButton = () => {
            if (this.state.selectedFile == null || this.state.videoTitle == null || this.state.videoCategory == null) {
                return true;
            }
        }

        render() {
            return (
                <>
                    <h1>Upload a Video</h1>
                    <p>Choose any .mp4 file to upload.
                    <br />Max allowed upload size: 10MB</p>
                    <div>
                        <input type="file" accept=".mp4" onClick={this.onFileChange} onChange={this.onFileChange}/>
                        <p />
                        <div>
                            <h4>File Details: </h4>
                            {this.fileData()}
                            <br/>
                            <Form className="video-upload-form">
                                <Form.Group>
                                    <Form.Label>Video Title*</Form.Label>
                                    <Form.Control type="text" maxLength="50" placeholder="Video Title" onChange={this.onTitleChange}/>
                                    <Form.Text>Video title cannot exceed 50 characters in length.</Form.Text>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <Form.Label>Video Category*</Form.Label>
                                    <Form.Control as="select" onChange={this.onCategoryChange}>
                                        <option default>Category</option>
                                        <option>News</option>
                                        <option>Sports</option>
                                        <option>Entertainment</option>
                                        <option>Music</option>
                                        <option>Video Games</option>
                                        <option>Movies</option>
                                        <option>TV Shows</option>
                                    </Form.Control>
                                    <Form.Text>Pick a category that you think your video best fits into.</Form.Text>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <Form.Label>Video Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} maxLength="300" placeholder="Video Description" onChange={this.onDescriptionChange}/>
                                    <Form.Text>Video description cannot exceed 300 characters in length.</Form.Text>
                                </Form.Group>
                            </Form>
                        </div>
                        <p />
                        <Button variant="secondary" disabled={this.disableUploadButton()} onClick={this.onFileUpload}>
                            Upload
                        </Button>
                        <br/>{this.state.uploadResponse}
                        <br/>
                    </div>
                </>
            );
        }
}

export default Upload;
