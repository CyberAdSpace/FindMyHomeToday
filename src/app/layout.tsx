import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Find My Home Today | Real Estate & Rentals in Spring Hill, FL",
  description:
    "Your one-stop destination for buying, selling, and renting homes in Spring Hill, Florida. Bilingual real estate services by Anthoney Hamrick, REALTOR at Tropic Shores Realty, and BAM Casas property management by Anthoney & Maria.",
  keywords: [
    "Spring Hill FL real estate",
    "Florida homes for sale",
    "Spring Hill rentals",
    "BAM Casas",
    "property management",
    "bilingual realtor",
    "Tropic Shores Realty",
  ],
  openGraph: {
    title: "Find My Home Today | Real Estate & Rentals in Spring Hill, FL",
    description:
      "Buy, sell, or rent your perfect home in Spring Hill, Florida. Bilingual real estate and property management services.",
    url: "https://findmyhometoday.com",
    siteName: "Find My Home Today",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
