importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyB-TgkmFDIfz5GEMftyjJ5dlS5SevGjthU",
    authDomain: "triphive-notifier.firebaseapp.com",
    projectId: "triphive-notifier",
    storageBucket: "triphive-notifier.firebasestorage.app",
    messagingSenderId: "900702040320",
    appId: "1:900702040320:web:6977a5b333a436930843e5",
    measurementId: "G-V109PN8KZ4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Message reçu en arrière-plan:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icon.png"
    });
});
