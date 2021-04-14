import React from "react";
import { List, ListItem, Box } from "@material-ui/core";
import UserPost from './UserPost';

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            feed: Array(100).fill({
                username: 'Harry', postImage: 'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg',
                postText: 'Look!', postDate: '14th April'
            })
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
                            <UserPost {...post} />
                        </ListItem>


                    })}
                </List>
            </Box>
        );
    }
}

export default PostList;
