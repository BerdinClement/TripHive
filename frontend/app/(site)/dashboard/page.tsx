"use client";
import { useState } from "react";
import { useTripStore } from "@/stores/userTripStore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { trips, addTrip, removeTrip } = useTripStore();
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  const handleAddTrip = () => {
	if (tripName.trim() === "" || startDate.trim() === "" || endDate.trim() === "") return;
	addTrip({
	  id: Date.now().toString(),
	  name: tripName,
	  startDate,
	  endDate,
	  steps: [],
	});
	setTripName("");
	setStartDate("");
	setEndDate("");
  };

  const handleNavigateToTrip = (tripId: string) => {
	router.push(`/trips/${tripId}`);
  };

  return (
	<main className="min-h-screen bg-gray-100 p-6">
	  <header className="mb-6 text-center">
		<h1 className="text-3xl font-bold text-gray-900">Your Trips</h1>
	  </header>

	  {/* Formulaire pour ajouter un voyage */}
	  <div className="max-w-lg mx-auto mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
		<input
		  type="text"
		  value={tripName}
		  onChange={(e) => setTripName(e.target.value)}
		  placeholder="Trip name"
		  className="p-2 border rounded-lg"
		/>
		<input
		  type="date"
		  value={startDate}
		  onChange={(e) => setStartDate(e.target.value)}
		  className="p-2 border rounded-lg"
		/>
		<input
		  type="date"
		  value={endDate}
		  onChange={(e) => setEndDate(e.target.value)}
		  className="p-2 border rounded-lg"
		/>
		<button
		  onClick={handleAddTrip}
		  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition col-span-1 md:col-span-3"
		>
		  Add Trip
		</button>
	  </div>

	  {/* Liste des voyages */}
	  <section className="max-w-4xl mx-auto">
		{trips.length === 0 ? (
		  <p className="text-center text-gray-500">No trips yet. Add one!</p>
		) : (
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{trips.map((trip) => (
			  <div
				key={trip.id}
				className="p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md transition"
				onClick={() => handleNavigateToTrip(trip.id)}
			  >
				<h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500">
				  {trip.name}
				</h3>
				<p className="text-gray-600">{trip.startDate} - {trip.endDate}</p>
				<button
				  onClick={(e) => {
					e.stopPropagation();
					removeTrip(trip.id);
				  }}
				  className="text-red-500 hover:text-red-700 transition mt-2"
				>
				  ✖ Remove
				</button>
			  </div>
			))}
		  </div>
		)}
	  </section>
	</main>
  );
}
