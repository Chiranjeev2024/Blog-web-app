import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAkNxQQG3yoyvDyomnVKhcNYIP4Rf2PcI",
  authDomain: "bolg-using-react-hooks.firebaseapp.com",
  projectId: "bolg-using-react-hooks",
  storageBucket: "bolg-using-react-hooks.appspot.com",
  messagingSenderId: "416094573689",
  appId: "1:416094573689:web:c0978170bc95c65bcc30a8",
};

// Initialize Firebase - Web Namespaced API version
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
