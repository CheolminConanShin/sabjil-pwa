import firebase from 'firebase'

require("firebase/firestore");

var config = {
  apiKey: "AIzaSyBstiH55FnL0RgFd4THU_R9e99gmgIfy2w",
  authDomain: "sabjil-conan.firebaseapp.com",
  databaseURL: "https://sabjil-conan.firebaseio.com",
  projectId: "sabjil-conan",
  storageBucket: "sabjil-conan.appspot.com",
  messagingSenderId: "418221144643"
};
firebase.initializeApp(config)

export default {
  read: {
    cat: firebase.firestore().collection('cat')//.get()
  },
  add: {
    cat: newCat => firebase.firestore().collection('cat').add(newCat)
  }
}
