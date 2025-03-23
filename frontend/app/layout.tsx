import type { Metadata } from "next";
import "./globals.css";
import RequestNotificationPermission from "@/lib/RequestNotificationPermission";

export const metadata: Metadata = {
  title: "TripHive",
  description: "A travel planning app",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RequestNotificationPermission/>
        {children}
      </body>
    </html>
  );
}
