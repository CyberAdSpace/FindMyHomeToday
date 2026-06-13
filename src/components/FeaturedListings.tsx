import Link from "next/link";

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-accent font-semibold uppercase tracking-wide text-sm">
            Live MLS Listings / Listados en Vivo
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Homes for Sale Now
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Browse the latest properties available in Spring Hill and the
            surrounding Hernando &amp; Pasco County areas, updated daily from
            the MLS.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://findmyflhome.com/search_results.html?newsearch=1&theLocation=Spring+Hill,+FL&action=quicksearch"
            title="Featured MLS Listings - Spring Hill, FL"
            className="w-full border-0"
            style={{ minHeight: "700px" }}
            loading="lazy"
          />
        </div>

        <div className="text-center mt-8">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Advanced Search &mdash; B&uacute;squeda Avanzada
          </Link>
        </div>
      </div>
    </section>
  );
}
