import React from "react";
import { List, ListItem, Box } from "@material-ui/core";
import UserPost from './UserPost';
import { feedFunctions } from "../../firebase";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        // this.props.type
        this.state = {
            feed: []
        }
    }

    componentDidMount(){
        if (this.props.type === "feed"){
            setInterval(() => {
                this.setState({ feed : []}, () => feedFunctions.fetchFeed(this))
            },1000)

            
        }
        else{
            //TODO lesson - 6
            // {name:{first, last}, profile_pic, info: { text, timestamp}}
            // moment.js
        }   
    }

    render() {
        return (
            <Box display='flex' justifyContent='center'>
                <List>
                    {this.state.feed.map(post => {

                        // We need to pass a key when using array.map so React can correctly update our page
                        // when the array changes.
                        // The key should be a value unique to that specific item.
                        // Therefore, combining various fields with '+' from the post will help make a unique identifier.
                        // Read more here: https://reactjs.org/docs/lists-and-keys.html
                        return <ListItem key={post.postText + post.postImage}>
                            
                            <UserPost username={`${post.name.first} ${post.name.last}`}
                            userAvatar={post.profile_pic}
                            postDate={new Date(post.info.timestamp).toString()}
                            postText={post.info.text}/>
                        </ListItem>


                    })}
                </List>
            </Box>
        );
    }
}

export default PostList;
