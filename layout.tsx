import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sage SDG AI AI | SDG Water and Health Agent",
  description: "A clean water and public health-risk awareness AI Agent prototype for SDG 6 and SDG 3."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
