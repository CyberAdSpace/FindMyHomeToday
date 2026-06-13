import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Home Valuation (CMA) | Find My Home Today",
  description:
    "Get a free Comparative Market Analysis for your property in Spring Hill, FL. Find out what your home is worth with Anthoney Hamrick, REALTOR.",
};

export default function CMAPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 flex flex-col min-h-screen">
        <div className="bg-primary text-white py-6 px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Free Home Valuation
          </h1>
          <p className="text-white/80 mt-1 text-sm md:text-base">
            Find out what your home is worth &mdash; Descubra el valor de su
            hogar
          </p>
        </div>
        <div className="flex-1">
          <iframe
            src="https://findmyflhome.com/cmaform.html"
            title="Comparative Market Analysis Form"
            className="w-full border-0"
            style={{ minHeight: "calc(100vh - 160px)" }}
            loading="lazy"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
