// src/trips/trips.controller.ts
import { Controller, Post, Body, Param } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post('add-trip')
  async addTrip(
	@Body() body: { userId: string; tripName: string; startDate: string; endDate: string; token: string },
  ) {
	return this.tripsService.addTrip(
	  body.userId,
	  body.tripName,
	  body.startDate,
	  body.endDate,
	  body.token,
	);
  }

  @Post('send-notification/:userId')
  async sendNotification(@Param('userId') userId: string) {
	return this.tripsService.sendNotificationBeforeTrip(userId);
  }
}
