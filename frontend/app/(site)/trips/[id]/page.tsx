"use client";

import { useTripStore } from "@/stores/userTripStore";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TripDetails() {
  const { id } = useParams(); // Récupération de l'ID via useParams()
  const { trips, addStepToTrip, removeStepFromTrip } = useTripStore();
  const router = useRouter();
  const trip = trips.find((t) => t.id === id);

  const [stepName, setStepName] = useState("");

  if (!trip) {
	return <p className="text-center mt-10">Trip not found.</p>;
  }

  const handleAddStep = () => {
	if (stepName.trim() === "") return;
	addStepToTrip(trip.id, { id: Date.now().toString(), name: stepName });
	setStepName("");
  };

  return (
	<main className="min-h-screen bg-gray-100 p-6">
	  <button onClick={() => router.push("/dashboard")} className="text-blue-500 hover:underline">
		← Back to Trips
	  </button>

	  <header className="mb-6 text-center">
		<h1 className="text-3xl font-bold text-gray-900">{trip.name}</h1>
		<p className="text-gray-600">{trip.startDate} - {trip.endDate}</p>
	  </header>

	  {/* Formulaire pour ajouter une étape */}
	  <div className="max-w-lg mx-auto mb-6 flex gap-2">
		<input
		  type="text"
		  value={stepName}
		  onChange={(e) => setStepName(e.target.value)}
		  placeholder="New step name"
		  className="w-full p-2 border rounded-lg"
		/>
		<button
		  onClick={handleAddStep}
		  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
		>
		  Add Step
		</button>
	  </div>

	  {/* Liste des étapes */}
	  <section className="max-w-4xl mx-auto">
		{trip.steps.length === 0 ? (
		  <p className="text-center text-gray-500">No steps yet. Add one!</p>
		) : (
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{trip.steps.map((step) => (
			  <div key={step.id} className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
				<h3 className="text-lg font-semibold text-gray-800">{step.name}</h3>
				<button
				  onClick={() => removeStepFromTrip(trip.id, step.id)}
				  className="text-red-500 hover:text-red-700 transition"
				>
				  ✖
				</button>
			  </div>
			))}
		  </div>
		)}
	  </section>
	</main>
  );
}
