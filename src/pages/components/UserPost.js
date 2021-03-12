import React from 'react';
import {Grid, Avatar, Paper, ListItemText, ListItemAvatar} from "@material-ui/core";

const postStyle = {
    padding: 25,
}

const postImageStyle = {
    padding: 5,
    maxHeight: 500,
    maxWidth: '90vw'
}

const postTextStyle = {
    padding: 10
}

class UserPost extends React.Component {
    render() {
        return (<Paper elevation={2} style={postStyle}>
            <Grid container>
                <ListItemAvatar>
                    <Avatar alt={this.props.username} src={this.props.userAvatar}/>
                </ListItemAvatar>
                <h3>{this.props.username}</h3>
            </Grid>
            <Grid container justify="center">
                <img src={this.props.postImage} alt={this.props.postImageAlt} style={postImageStyle} height="40%"/>
            </Grid>
            <Grid container style={postTextStyle}>
                <ListItemText primary={this.props.postText} secondary={this.props.postDate}/>
            </Grid>
        </Paper>);
    }
}

export default UserPost;