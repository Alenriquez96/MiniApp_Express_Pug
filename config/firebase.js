const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDulHaXSECuQrQJF4bSzbR2DF1v-D_P07w",
  authDomain: "miniapp-37b1f.firebaseapp.com",
  projectId: "miniapp-37b1f",
  storageBucket: "miniapp-37b1f.appspot.com",
  messagingSenderId: "5758999850",
  appId: "1:5758999850:web:458ac909bd56165f9c9253"
}

const db = initializeApp(firebaseConfig);

module.exports = db;