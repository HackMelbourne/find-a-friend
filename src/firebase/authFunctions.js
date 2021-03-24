import Firebase from './firebase';

class AuthFunctions extends Firebase {
    signUp(firstname, lastname, email, pwd) {
        // Catch any errors thrown by firebase
        this.auth.createUserWithEmailAndPassword(email, pwd)
            .then((userCred) => {
                this.writeDatabase(userCred.user.uid, {
                    name: {
                        first: firstname,
                        last: lastname
                    },
                    email: email,
                    profile_pic: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
                    posts: {},
                    following: {
                        [userCred.user.uid]: 0
                    }
                });
            })
            .catch(this.debugError);
    }

    logIn(email, pwd) {
        // Log the user in to firebase
        // Catch any errors thrown
        this.auth.signInWithEmailAndPassword(email, pwd)
            .catch(this.debugError);
    }

    logOut(callback) {
        this.auth.signOut()
            .then(callback)
            .catch(this.debugError);
    }
}

const authFunctions = new AuthFunctions();
export default authFunctions;