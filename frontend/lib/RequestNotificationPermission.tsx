"use client";

import { useEffect } from "react";
import {requestNotificationPermission} from "@/lib/requestPerms";

export default function RequestNotificationPermission() {
  useEffect(() => {
	if (typeof window !== "undefined" && "serviceWorker" in navigator) {
	  navigator.serviceWorker
		.register("/firebase-messaging-sw.js")
		.then((registration) => {
		  console.log("Service Worker enregistré:", registration);
		})
		.catch((error) => {
		  console.error("Erreur d'enregistrement du Service Worker:", error);
		});

	  requestNotificationPermission();
	}
  }, []);

  return null;
}