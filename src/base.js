import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBy3J-u4-etUrDH25oH7PNKW_xn4_V3ChY",
  authDomain: "readlist-204105.firebaseapp.com",
  databaseURL: "https://readlist-204105.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };
// This is a default export
export default base;
