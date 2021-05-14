import React from 'react';
import '../../styling/Pages/Upload.css'
import {trackPromise} from "react-promise-tracker";

// axios allows us to consume REST APIs
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from '../PartsOfPage/Spinner'
import {Alert} from "react-bootstrap";
import {withAuth0} from "@auth0/auth0-react";

class Upload extends React.Component {

    /* Initial state */
    state = {
        // No file selected initially
        selectedFile: null,
        uploadResponse: null,
        videoTitle: null,
        videoCategory: null,
        videoDescription: null,
        videoId: [],
        error: '',
        inputKey: Date.now()
    };
    ;
    // HANDLING STATE CHANGES
    onFileChange = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    };

    onTitleChange = (event) => {
        this.setState({videoTitle: event.target.value})
    };

    onCategoryChange = (event) => {
        this.setState({videoCategory: event.target.value})
    }

    onDescriptionChange = (event) => {
        this.setState({videoDescription: event.target.value})
    }

    // Create FormData Object, Append File Info To It, POST Request
    onFileUpload = (event) => {
        const formData = new FormData();

        this.setState({uploadResponse: null});

        formData.append("file", this.state.selectedFile,);
        formData.append("title", this.state.videoTitle);
        formData.append("description", this.state.videoDescription);
        formData.append("category", this.state.videoCategory);
        formData.append("user", this.props.auth0.user.name);

        // With axios, returns JSON response so you don't need to resolve the promise 2s
        // Axios will catch all error in catch block
        // use trackPromise for the spinner
        trackPromise(
            axios.post("http://localhost:8090/file/upload", formData)
                .then(response => {
                    this.setState({videoId: [response.data]});
                    this.setState({uploadResponse: `Video uploaded successfully! Video id is: ${this.state.videoId}`});
                    return response.data;
                })
                .catch(error => this.setState({uploadResponse: "ERROR UPLOADING VIDEO. PLEASE CONTACT SUPPORT."})))
            .finally((videoId) => {
                this.setState({
                    videoId: null,
                    videoTitle: null,
                    videoCategory: null,
                    videoDescription: null,
                    selectedFile: null,
                    inputKey: Date.now()
                })
                document.getElementById("video-upload-form").reset();
            })
    };

    // Display Info on the File the User Chose
    fileData = () => {
        if (this.state.selectedFile) {
            let sizeInMB = (this.state.selectedFile.size / (1024 * 1024)).toFixed(1);
            return (
                <div>
                    <br/>
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

    alertDismissible = () => {
        if (this.state.uploadResponse !== null) {
            return (
                <Alert variant="secondary" onClose={() => this.setState({uploadResponse: null})} dismissible>
                    <p>
                        {this.state.uploadResponse}
                    </p>
                </Alert>
            );
        }
    }

        render() {
            const {user} = this.props.auth0;
            const {name} = user;
            return (
            <>
                <Spinner/>
                {this.alertDismissible()}
                <h1>Upload a Video</h1>
                <p>Choose any .mp4 file to upload.
                <br />Max allowed upload size: 10MB</p>
                <div>
                    <input key={this.state.inputKey} id="file-upload" type="file" accept=".mp4" onClick={this.onFileChange} onChange={this.onFileChange}/>
                    <p />
                    <div>
                        <h4>File Details: </h4>
                        {this.fileData()}
                        <br/>
                        <Form id="video-upload-form" className="video-upload-form">
                            <fieldset disabled>
                                <Form.Group>
                                    <Form.Label htmlFor="disabledTextInput">User</Form.Label>
                                    <Form.Control id="disabledTextInput" placeholder={name} />
                                </Form.Group>
                            </fieldset>
                            <br/>
                            <Form.Group>
                                <Form.Label>Video Title*</Form.Label>
                                <Form.Control type="text" maxLength="25" placeholder="Video Title" onChange={this.onTitleChange}/>
                                <Form.Text>Video title cannot exceed 25 characters in length.</Form.Text>
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
                                    <option>Traveling</option>
                                    <option>Fitness</option>
                                    <option>Video Games</option>
                                </Form.Control>
                                <Form.Text>Pick a category that you think your video best fits into.</Form.Text>
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>Video Description</Form.Label>
                                <Form.Control as="textarea" rows={3} maxLength="255" placeholder="Video Description" onChange={this.onDescriptionChange}/>
                                <Form.Text>Video description cannot exceed 255 characters in length.</Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                    <p />
                    <Button variant="secondary" disabled={this.disableUploadButton()} onClick={this.onFileUpload}>
                        Upload
                    </Button>
                </div>
                <br/>
            </>
        )
    }
}

export default withAuth0(Upload);
