import Firebase from './firebase';

class ProfileFunctions extends Firebase {
    fetchUserData(component, uid) {
        this.readDatabase(uid, "value", (snapshot) => {
            component.setState({user: snapshot});
        })
    }
}

const profileFunctions = new ProfileFunctions();
export default profileFunctions;