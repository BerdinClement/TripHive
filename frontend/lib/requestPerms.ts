import { getToken } from "firebase/messaging";
import { getMessagingInstance } from "@/firebase-config";

export const requestNotificationPermission = async () => {
  if (typeof window === "undefined") return; // Vérifie si on est côté serveur
  if (!("Notification" in window)) return; // Vérifie si Notifications sont supportées

  try {
	const permission = await Notification.requestPermission();
	if (permission !== "granted") return;

	const messaging = await getMessagingInstance();
	if (!messaging) {
	  console.warn("Firebase Messaging non supporté sur ce navigateur.");
	  return;
	}

	const token = await getToken(messaging, {
	  vapidKey: "BEk42q4so7Q-A0ICPlUi9Ne5sG72AD5rG7-4vv9SlWI18ggRjsLfw8s4e6T0-no-tuFoCs9Mc6KCs4KQGZJzZMs"
	});

	console.log("Token reçu :", token);
	return token;
  } catch (error) {
	console.error("Erreur lors de la demande de permission :", error);
  }
};
