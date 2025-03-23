// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyB-TgkmFDIfz5GEMftyjJ5dlS5SevGjthU",
    authDomain: "triphive-notifier.firebaseapp.com",
    projectId: "triphive-notifier",
    storageBucket: "triphive-notifier.firebasestorage.app",
    messagingSenderId: "900702040320",
    appId: "1:900702040320:web:6977a5b333a436930843e5",
    measurementId: "G-V109PN8KZ4"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Récupérer l'objet messaging
const messaging = getMessaging(app);

export { messaging };
