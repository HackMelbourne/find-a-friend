import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD9QrtB1dK7-NwXv8fylD5nnHkW3g3Ptu8",
    authDomain: "find-a-friend-44d7d.firebaseapp.com",
    databaseURL: "https://find-a-friend-44d7d-default-rtdb.firebaseio.com",
    projectId: "find-a-friend-44d7d",
    storageBucket: "find-a-friend-44d7d.appspot.com",
    messagingSenderId: "707723632986",
    appId: "1:707723632986:web:dbf886bcf5d857c35d1363"
};

app.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.database = app.database();
        this.storage = app.storage();
        this.auth = app.auth();
    }

    debugError(error) {
        alert(`${error.code} error has occurred - ${error.message}`);
    }

    writeDatabase(root, json) {
        this.database.ref(root).set(json)
            .catch(this.debugError);
    }

    pushDatabase(root, json, callback) {
      // Push to the database, meaning we create a NEW item every time
      // callback called with the pushed post
      this.database.ref(root).push(json).then(ref=>callback(ref))
        .catch((error) => {
          this.debugError(error);
        });
    }
  
    uploadFile(root, filename, data, callback) {
      // Upload a file to firebase storage
      // callback called with a weblink to the file.
      this.storage.ref(`${root}/${filename}`).put(data).then(snapshot=>{
        snapshot.ref.getDownloadURL().then(url=>callback(url));
      });
    }

    readDatabase(root, event, callback) {
        this.database.ref(root).on(event, callback);
    }

    onUserActive(callback, fallback=null) {
        this.auth.onAuthStateChanged((userInstance) => {
            if(userInstance != null) {
                callback(userInstance.uid);
            }
            else if(fallback != null) {
                fallback();
            }
        });
    }
}

export default Firebase;