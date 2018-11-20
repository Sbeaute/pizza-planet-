
import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDI_ieq_elosPP-0qW9wz2fs007WYIa9MQ",
    authDomain: "pizza-planet-597fc.firebaseapp.com",
    databaseURL: "https://pizza-planet-597fc.firebaseio.com",
    projectId: "pizza-planet-597fc",
    storageBucket: "pizza-planet-597fc.appspot.com",
    messagingSenderId: "143463795690"
  };
  const firebase = Firebase.initializeApp(config);
  const db = firebaseApp.databse()
   export const dbMenuRef = db.ref('menu')
   export const dbOrdersRef = db.ref('orders')