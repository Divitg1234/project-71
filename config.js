import firebase from 'firebase'
require("@firebase/firestore")


 const firebaseConfig = {
  apiKey: "AIzaSyACXgKHUR58VVb0_ZEk6Xd3htn03mVrmrQ",
  authDomain: "complaint-forum-92b71.firebaseapp.com",
  projectId: "complaint-forum-92b71",
  storageBucket: "complaint-forum-92b71.appspot.com",
  messagingSenderId: "911421842654",
  appId: "1:911421842654:web:56d4a505ccc18972cc8e4f"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

