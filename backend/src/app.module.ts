import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { TripsModule } from './trips/trips.module';
import {ScheduleModule} from "@nestjs/schedule";

@Module({
  imports: [TripsModule, FirebaseModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
