"use client"
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import {messaging} from "@/firebaseConfig";

function RequestNotificationPermission() {
  useEffect(() => {
	const requestPermission = async () => {
	  try {
		const permission = await Notification.requestPermission();
		if (permission === "granted") {
		  console.log("Notification permission granted.");
		  const token = await getToken(messaging, {
			vapidKey: process.env.VAPID || "BEk42q4so7Q-A0ICPlUi9Ne5sG72AD5rG7-4vv9SlWI18ggRjsLfw8s4e6T0-no-tuFoCs9Mc6KCs4KQGZJzZMs",
		  });
		  console.log("FCM Token:", token);
		} else {
		  console.log("Notification permission denied.");
		}
	  } catch (error) {
		console.error("Error getting notification permission", error);
	  }
	};

	requestPermission();
  }, []);

  return null;
}

export default RequestNotificationPermission;
