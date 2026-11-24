import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Shreesha Incorporated | Importer & National Distributor of MumBuds USA & Bambo Nature in Nepal",
    template: "%s | Shreesha Incorporated Pvt. Ltd.",
  },
  description:
    "Shreesha Incorporated Pvt. Ltd. is a Kathmandu-based importer and national distributor specializing in international baby care, hygiene, and personal care products from MumBuds USA and Bambo Nature Denmark.",
  keywords: [
    "Shreesha Incorporated Nepal",
    "MumBuds Nepal Distributor",
    "Bambo Nature Nepal Distributor",
    "Baby Care Products Distributor Nepal",
    "Kathmandu Baby Diaper Wholesale",
    "MumBuds Diapers Nepal",
    "Bambo Nature Diapers Nepal",
    "Abena Maternity Nepal",
  ],
  authors: [{ name: "Shreesha Incorporated Pvt. Ltd." }],
  metadataBase: new URL("https://shreeshaincorporated.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Shreesha Incorporated | Importer & National Distributor in Nepal",
    description:
      "Connecting MumBuds USA and Bambo Nature with retail, pharmacy, and wholesale networks across Nepal.",
    url: "https://shreeshaincorporated.com",
    siteName: "Shreesha Incorporated Pvt. Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream-50 text-slate-800 antialiased selection:bg-sage-200 selection:text-corporate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
