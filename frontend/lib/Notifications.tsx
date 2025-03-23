import { useEffect } from "react";
import {getMessaging, onMessage} from "firebase/messaging";

const Notifications = () => {
  useEffect(() => {
	const messaging = getMessaging();
	onMessage(messaging, (payload) => {
	  console.log("Message reçu en premier plan:", payload);
	  alert(`Notification: ${payload.notification?.title}`);
	});
  }, []);

  return <div>Notifications activées</div>;
};

export default Notifications;
