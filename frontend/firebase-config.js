import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyB-TgkmFDIfz5GEMftyjJ5dlS5SevGjthU",
    authDomain: "triphive-notifier.firebaseapp.com",
    projectId: "triphive-notifier",
    storageBucket: "triphive-notifier.firebasestorage.app",
    messagingSenderId: "900702040320",
    appId: "1:900702040320:web:6977a5b333a436930843e5",
    measurementId: "G-V109PN8KZ4"
};

const app = initializeApp(firebaseConfig);

export const getMessagingInstance = async () => {
    if (typeof window === "undefined") return null;
    if (!(await isSupported())) return null;
    return getMessaging(app);
};