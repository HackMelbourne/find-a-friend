import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import authFunctions from "../firebase/authFunctions.js";
import profileFunctions from "../firebase/profileFunctions.js";
import { Redirect } from "react-router";
import {
    Avatar, 
    Grid
} from "@material-ui/core";
import PostList from "./components/PostList.js";

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

        var name = this.state.user.val().name.first + " " + this.state.user.val().name.last;

        return (

            <div>
                <NavBar signout={this.handleSignOut}/>

                <Grid align="center">
                    <Avatar alt="Profile Photo" src={this.state.user.val().profile_pic}/>
                    <h1>{name}</h1>
                </Grid>

                <PostList type="profile" userData={this.state.user}/>

            </div>
        )
    }

}

export default Profile;