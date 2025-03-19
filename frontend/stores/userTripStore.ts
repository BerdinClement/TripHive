import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Step {
  id: string;
  name: string;
}

interface Trip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  steps: Step[];
}

interface TripStore {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  removeTrip: (id: string) => void;
  addStepToTrip: (tripId: string, step: Step) => void;
  removeStepFromTrip: (tripId: string, stepId: string) => void;
}

export const useTripStore = create<TripStore>()(
  persist(
	(set) => ({
	  trips: [],
	  addTrip: (trip) =>
		set((state) => ({ trips: [...state.trips, { ...trip, steps: [] }] })),
	  removeTrip: (id) =>
		set((state) => ({ trips: state.trips.filter((trip) => trip.id !== id) })),
	  addStepToTrip: (tripId, step) =>
		set((state) => ({
		  trips: state.trips.map((trip) =>
			trip.id === tripId ? { ...trip, steps: [...trip.steps, step] } : trip
		  ),
		})),
	  removeStepFromTrip: (tripId, stepId) =>
		set((state) => ({
		  trips: state.trips.map((trip) =>
			trip.id === tripId
			  ? { ...trip, steps: trip.steps.filter((step) => step.id !== stepId) }
			  : trip
		  ),
		})),
	}),
	{ name: "trip-storage" }
  )
);
