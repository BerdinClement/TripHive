"use client"
import { useEffect } from "react";
import {requestNotificationPermission} from "@/firebaseConfig";

function RequestNotificationPermission() {
  useEffect(() => {
	if ("serviceWorker" in navigator) {
	  navigator.serviceWorker
		.register("/firebase-messaging-sw.js")
		.then((registration) => {
		  console.log("Service Worker enregistré:", registration);
		})
		.catch((error) => {
		  console.error("Erreur d'enregistrement du Service Worker:", error);
		});
	}

	requestNotificationPermission();
  }, []);

  return <> </>;
}

export default RequestNotificationPermission;
