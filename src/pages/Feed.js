import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {authFunctions, profileFunctions} from "../firebase";
import {Redirect} from "react-router-dom";
import {Box, Button, Dialog, DialogTitle, DialogContent, TextField} from "@material-ui/core";
import PostList from "./components/PostList";

const outerContainer = {
    position: "static",
    top: "80px",
    width: "70vw",
    margin: "20px auto",
    padding: "30px",
    backgroundColor: "#333333",
    borderRadius: "5px",
}

const container = {
    margin: "auto",
    padding: "2px 0px 2px 20px",
    backgroundColor: "#6e6e6e",
    borderRadius: "20px",
    color: "#bababa"
}

class UploadDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            attachment: null,
        }

        this.handleText = this.handleText.bind(this);
        this.handleAttach = this.handleAttach.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleText(event){
        this.setState({text:event.target.value})
    }

    handleAttach(event){
        this.setState({attachment: event.target.files[0]})
    }

    handleSubmit(){
        this.props.onClose();
    }

    render(){
        return(
            <Dialog open = {this.props.open} onClose = {this.props.onClose} aria-labelledby = "simple-dialog-title" fullWidth scroll="paper">
                <DialogTitle>Write your post</DialogTitle>
                <DialogContent>
                    <TextField
                    placeholder = "What's on your mind?"
                    onChange = {this.handleText}
                    multiline
                    rows = {4}
                    fullWidth/>
                    <input type = "file" onChange = {this.handleAttach}/>
                    <Button onClick = {this.handleSubmit}>Post</Button>
                </DialogContent>
            </Dialog>
        )
    }
}

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: null,
            signout: false,
            posting: false,
            posts: []
        }

        this.handleSignOut = this.handleSignOut.bind(this);
        this.openPostModal = this.openPostModal.bind(this);
        this.closePostModal = this.closePostModal.bind(this);
    }

    componentDidMount(){
        authFunctions.onUserActive(
            (uid) => {
                profileFunctions.fetchUserData(this, uid);
            },
            () => {
                this.setState({signout: true});
            }
        )
    }

    handleSignOut(){
        authFunctions.logOut(() => {
            this.setState({signout: true});
        })
    }

    openPostModal(){
        this.setState({posting: true});
    }

    closePostModal(){
        this.setState({posting: false});
    }

    render(){
        if (this.state.signout){
            return <Redirect to="/login"/>
        }

        if (this.state.user == null){
            return <div></div>
        }

        return(
            <div>
                <NavBar signout = {this.handleSignOut}/>
                <Box style = {outerContainer}>
                    <Box style = {container} onClick = {this.openPostModal}>
                        <p>What's on your mind?</p>
                    </Box>
                    <UploadDialog open = {this.state.posting} onClose = {this.closePostModal}/>
                </Box>
                <PostList/>
            </div>
        )
    }
}

export default Feed;