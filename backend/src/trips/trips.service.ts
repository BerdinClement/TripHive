// src/trips/trips.service.ts
import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import * as admin from 'firebase-admin';
import {Cron} from "@nestjs/schedule";

@Injectable()
export class TripsService {
  private db = admin.firestore();

  constructor(private firebaseService: FirebaseService) {}

  async addTrip(userId: string, tripName: string, startDate: string, endDate: string, token: string) {
	const tripRef = this.db.collection('trips').doc(userId);
	await tripRef.set({
	  name: tripName,
	  startDate: new Date(startDate),
	  endDate: new Date(endDate),
	  token: token,
	});

	return { message: 'Voyage ajouté avec succès' };
  }

  async getTrips(userId: string) {
	const tripRef = await this.db.collection('trips').doc(userId).get();
	return tripRef.exists ? tripRef.data() : null;
  }

  // Envoi de notification si le voyage commence bientôt
  async sendNotificationBeforeTrip(userId: string) {
	const trip = await this.getTrips(userId);

	if (!trip) {
	  throw new Error('Voyage introuvable');
	}

	const today = new Date();
	const threeDaysLater = new Date(today);
	threeDaysLater.setDate(today.getDate() + 3);

	if (trip.startDate.toDateString() === threeDaysLater.toDateString()) {
	  await this.firebaseService.sendPushNotification(
		trip.token,
		`Votre voyage ${trip.name} commence bientôt !`,
		`N'oubliez pas votre départ prévu pour ${trip.startDate.toLocaleDateString()}`
	  );
	}
  }

  @Cron('0 10 * * *')
  async sendNotificationsToAllUsers() {
	console.log('*** * * * * *');
	const users = ["user1", "user2", "user3"];
	for (const userId of users) {
	  await this.sendNotificationBeforeTrip(userId);
	}
  }
}
