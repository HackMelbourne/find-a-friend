import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import authFunctions from "../firebase/authFunctions.js";
import profileFunctions from "../firebase/profileFunctions.js";
import { Redirect } from "react-router";
import {
    Avatar, 
    Grid
} from "@material-ui/core";

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            signout: false,
        }
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.uid);
        profileFunctions.fetchUserData(this, this.props.match.params.uid);
    }

    handleSignOut(){
        authFunctions.logOut(() => {
            this.setState({signout: true});
        })
    }

    render() {

        if (this.state.signout) {
            return <Redirect to="/login"/>
        }
        if (this.state.user == null) {
            return <div></div>;
        }

        var name = this.state.user.val().name;

        return (

            <div>
                <NavBar signout={this.handleSignOut}/>

                <Grid align="center">
                    
                    <h1>{name}</h1>
                </Grid>

            </div>
        )
    }

}

export default Profile;