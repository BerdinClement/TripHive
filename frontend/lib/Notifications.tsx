import { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import {messaging} from "@/firebaseConfig";

const Notifications = () => {
  useEffect(() => {
	onMessage(messaging, (payload) => {
	  console.log("Message reçu en premier plan:", payload);
	  alert(`Notification: ${payload.notification?.title}`);
	});
  }, []);

  return <div>Notifications activées</div>;
};

export default Notifications;
