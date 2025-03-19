// src/firebase/firebase.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class FirebaseService {
  constructor() {
	if (!admin.apps.length) {
	  admin.initializeApp({
		credential: admin.credential.cert(path.join(__dirname, '../../config/serviceAccountKey.json')),
	  });
	}
  }

  // Envoi de notification push
  async sendPushNotification(token: string, title: string, body: string) {
	const message = {
	  notification: {
		title: title,
		body: body,
	  },
	  token: token,
	};

	try {
	  const response = await admin.messaging().send(message);
	  console.log('Notification envoyée:', response);
	} catch (error) {
	  console.error('Erreur lors de l\'envoi de la notification:', error);
	}
  }
}
