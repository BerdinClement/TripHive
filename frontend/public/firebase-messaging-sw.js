import {messaging} from "../firebaseConfig";

importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");

// Gérer les notifications en arrière-plan
messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);

    // Personnaliser la notification ici
    const notificationTitle = "Background Notification Title";
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/icon.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
