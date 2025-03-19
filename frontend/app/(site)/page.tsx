import Head from "next/head";
import Link from "next/link"; // Importation du composant Link

export default function Home() {
  return (
    <>
      <Head>
        <title>TripHive - Organize Your Travels</title>
        <meta name="description" content="Plan your trips easily with TripHive, the ultimate travel organizer." />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-center p-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Plan, Organize, and Share Your Trips with <span className="text-blue-500">TripHive</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A seamless travel experience with offline mode, itinerary management, and collaboration tools.
          </p>
          <Link href="/dashboard"> {/* Lien vers la page dashboard */}
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
              Get Started
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">📍 Itinerary Management</h3>
            <p className="text-gray-600 mt-2">Easily create and track your travel plans in one place.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">🌍 Offline Mode</h3>
            <p className="text-gray-600 mt-2">Access your trips even when you&apos;re offline.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">🤝 Collaboration</h3>
            <p className="text-gray-600 mt-2">Plan your trips together with friends and family.</p>
          </div>
        </section>
      </main>
    </>
  );
}
