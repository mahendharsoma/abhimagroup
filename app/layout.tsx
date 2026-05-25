import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Abhima Group - Building Tomorrow's Solutions",
  description: "Abhima Group - A dynamic and diversified organization dedicated to driving innovation across technology, construction, and infrastructure.",
  keywords: "Abhima Group, Technology Solutions, Construction, Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
