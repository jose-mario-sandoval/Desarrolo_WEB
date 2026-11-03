// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
    import { getFirestore } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
  apiKey: "AIzaSyAScX_y-MyqiabdrPHMazc4EGTc6kjbxa8",
  authDomain: "app1-503d7.firebaseapp.com",
  projectId: "app1-503d7",
  storageBucket: "app1-503d7.firebasestorage.app",
  messagingSenderId: "566309514017",
  appId: "1:566309514017:web:d4ca051303c2f8812c2c60",
  measurementId: "G-B7NDY3S98R"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);
  export {db};