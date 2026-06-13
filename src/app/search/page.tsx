import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Search MLS Listings | Find My Home Today",
  description:
    "Search live MLS listings in Spring Hill, Hernando County, and the greater Tampa Bay area. Find homes for sale with Anthoney Hamrick, REALTOR at Tropic Shores Realty.",
};

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 flex flex-col min-h-screen">
        <div className="bg-primary text-white py-6 px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Search MLS Listings
          </h1>
          <p className="text-white/80 mt-1 text-sm md:text-base">
            Browse homes for sale in Spring Hill &amp; surrounding areas
            &mdash; Buscar propiedades en venta
          </p>
        </div>
        <div className="flex-1">
          <iframe
            src="https://findmyflhome.com/search.html"
            title="MLS Property Search"
            className="w-full border-0"
            style={{ minHeight: "calc(100vh - 160px)" }}
            allow="geolocation"
            loading="lazy"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
