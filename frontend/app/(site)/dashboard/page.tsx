"use client";
import Head from "next/head";
import { useTripStore } from "@/stores/userTripStore";
import { useState } from "react";

export default function Dashboard() {
  const { trips, addTrip, removeTrip, addStepToTrip, removeStepFromTrip } = useTripStore();
  const [tripName, setTripName] = useState("");
  const [stepName, setStepName] = useState("");
  const [selectedTripId, setSelectedTripId] = useState("");

  const handleAddTrip = () => {
	if (tripName.trim() === "") return;
	addTrip({ id: Date.now().toString(), name: tripName, date: new Date().toLocaleDateString(), steps: [] });
	setTripName(""); // Reset input
  };

  const handleAddStep = () => {
	if (stepName.trim() === "" || !selectedTripId) return;
	addStepToTrip(selectedTripId, { id: Date.now().toString(), name: stepName });
	setStepName(""); // Reset input
  };

  return (
	<>
	  <Head>
		<title>Dashboard - TripHive</title>
		<meta name="description" content="Manage your trips easily from the TripHive dashboard." />
	  </Head>

	  <main className="min-h-screen bg-gray-100 p-6">
		{/* Header */}
		<header className="mb-6 text-center">
		  <h1 className="text-3xl font-bold text-gray-900">Your Trips</h1>
		  <p className="text-gray-600">Plan and manage your upcoming adventures.</p>
		</header>

		{/* Add Trip Form */}
		<div className="max-w-lg mx-auto mb-6 flex gap-2">
		  <input
			type="text"
			value={tripName}
			onChange={(e) => setTripName(e.target.value)}
			placeholder="New trip name"
			className="w-full p-2 border rounded-lg"
		  />
		  <button
			onClick={handleAddTrip}
			className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
		  >
			Add
		  </button>
		</div>

		{/* Trip List */}
		<section className="max-w-4xl mx-auto">
		  {trips.length === 0 ? (
			<p className="text-center text-gray-500">No trips yet. Add one!</p>
		  ) : (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			  {trips.map((trip) => (
				<div key={trip.id} className="p-4 bg-white rounded-lg shadow">
				  <div className="flex justify-between items-center">
					<div>
					  <h3 className="text-lg font-semibold text-gray-800">{trip.name}</h3>
					  <p className="text-gray-600">{trip.date}</p>
					</div>
					<button
					  onClick={() => removeTrip(trip.id)}
					  className="text-red-500 hover:text-red-700 transition"
					>
					  ✖
					</button>
				  </div>

				  {/* Select Trip for Adding Steps */}
				  <button
					onClick={() => setSelectedTripId(trip.id)}
					className="mt-2 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
				  >
					Add Steps
				  </button>

				  {/* Display Steps */}
				  <div className="mt-4">
					{trip.steps.length === 0 ? (
					  <p className="text-gray-500">No steps added yet.</p>
					) : (
					  <ul className="list-disc pl-6">
						{trip.steps.map((step) => (
						  <li key={step.id} className="flex justify-between items-center">
							<span>{step.name}</span>
							<button
							  onClick={() => removeStepFromTrip(trip.id, step.id)}
							  className="text-red-500 hover:text-red-700 transition"
							>
							  ✖
							</button>
						  </li>
						))}
					  </ul>
					)}
				  </div>
				</div>
			  ))}
			</div>
		  )}
		</section>

		{/* Add Step Form */}
		{selectedTripId && (
		  <div className="max-w-lg mx-auto mt-6 flex gap-2">
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
		)}
	  </main>
	</>
  );
}
