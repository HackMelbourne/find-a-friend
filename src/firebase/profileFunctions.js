import Firebase from './firebase';

class ProfileFunctions extends Firebase {
    fetchUserData(component, uid) {
        this.readDatabase(uid, "value", (snapshot) => {
            component.setState({user: snapshot});
        })
    }

    postOnTimeline(text, attachment){
        // 1. make the basic post with just text
        // 2. Upload image
        // 3. set the post with the image url
        const uploadPost=(uid)=>{
          this.pushDatabase(`${uid}/posts`, { text, attachment: null, timestamp: Date.now() },
          postRef=>{
              uploadAttachment(uid, postRef);
    
          })
    
        }
        const uploadAttachment = (uid, postRef)=>{
          if(!attachment)
            return;
          this.uploadFile(uid, postRef.key, attachment, url=>{
            this.writeDatabase(`${uid}/posts/${postRef.key}/attachment`, url);
    
          })
    
    
        }
        // run the steps with the user's ID
        this.onUserActive(uploadPost);
    
      }
}

const profileFunctions = new ProfileFunctions();
export default profileFunctions;