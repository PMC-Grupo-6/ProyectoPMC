import * as firebase from 'firebase'


export const firebaseConfig={
    apiKey: "AIzaSyCjiSpaMdXlyPl4eNlMoKoXRfjkk8qi6Us",
        authDomain: "proyectopmc-c6b20.firebaseapp.com",
        databaseURL: "https://proyectopmc-c6b20.firebaseio.com",
        projectId: "proyectopmc-c6b20",
        storageBucket: "proyectopmc-c6b20.appspot.com",
        messagingSenderId: "683390242781",
        appId: "1:683390242781:web:401a0842fc8745fc30b034",
        measurementId: "G-VJ4NJ4Q4V8"
}


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
export const auth=firebase.auth();
export const analytics=firebase.analytics();
export default firebase;