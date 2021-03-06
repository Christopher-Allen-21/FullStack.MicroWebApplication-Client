import React from 'react';
import '../../styling/PartsOfPage/Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {withAuth0} from "@auth0/auth0-react";

import AuthNav from "../../auth/AuthNav.js"


class Navigation extends React.Component{
    state = {
        searchBarText: null,
    };


    //window.location.href="/play";

    onTextChange = (event) => {

    }

    render(){
        return (
            <>
                <Navbar className="nav-bar-container" bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand id="nav-bar-logo" href="/"><strong>ZipTube</strong></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/explore">Explore</Nav.Link>
                        <Nav.Link href="/upload">Upload</Nav.Link>
                        {/*<Nav.Link href="/subscriptions">Subscriptions</Nav.Link>*/}
                        <Nav.Link href="/history">History</Nav.Link>
                        <Nav.Link href="/support">Support</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <AuthNav className="nav-bar-login"/>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
                        <Button variant="outline-info" >Search</Button>
                    </Form>
                </Navbar>
            </>
        );
    }


}

export default withAuth0(Navigation);
