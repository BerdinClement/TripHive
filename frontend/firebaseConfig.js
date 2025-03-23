// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {getMessaging, getToken} from "firebase/messaging";

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

export const requestNotificationPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "BEk42q4so7Q-A0ICPlUi9Ne5sG72AD5rG7-4vv9SlWI18ggRjsLfw8s4e6T0-no-tuFoCs9Mc6KCs4KQGZJzZMs"
            });
            console.log("Token:", token);
            return token;
        }
    } catch (error) {
        console.error("Erreur lors de la demande de permission:", error);
    }
};