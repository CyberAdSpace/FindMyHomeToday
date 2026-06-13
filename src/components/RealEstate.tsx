import Link from "next/link";

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Buying a Home",
    titleEs: "Comprar una Casa",
    description:
      "First-time buyers or seasoned investors \u2014 I'll guide you through every step of purchasing property in the Spring Hill area and beyond.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Selling Your Property",
    titleEs: "Vender su Propiedad",
    description:
      "Get top dollar for your home with a Realtor who knows the local market inside and out.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Investment Properties",
    titleEs: "Propiedades de Inversi\u00f3n",
    description:
      "Interested in rental income? I can help you find the perfect investment property and manage it through BAM Casas.",
  },
];

export default function RealEstate() {
  return (
    <section id="real-estate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide text-sm">
            Real Estate Services / Servicios Inmobiliarios
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Buy, Sell &amp; Invest in Florida
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Anthoney Hamrick is a licensed Florida REALTOR&reg; at Tropic Shores
            Realty. Whether you&apos;re looking to buy your dream home, sell a
            property, or invest in Florida real estate, you&apos;ll get
            personal, family-first service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-warm rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-accent font-medium mt-1">
                {service.titleEs}
              </p>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Agent card */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-[180px] h-[180px] rounded-full border-4 border-accent bg-white/10 flex items-center justify-center">
              <svg className="w-20 h-20 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <div className="text-center md:text-left text-white flex-1">
            <h3 className="text-2xl font-bold">Anthoney Hamrick</h3>
            <p className="text-accent font-semibold">
              REALTOR&reg; &middot; Tropic Shores Realty
            </p>
            <p className="text-white/80 mt-3">
              Bilingual service available &mdash; English &amp; Espa&ntilde;ol.
              Whether you&apos;re a first-time buyer, seasoned investor, or
              looking to sell, I bring the same personal, family-first service
              that sets us apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Search MLS Listings
              </Link>
              <Link
                href="/cma"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
              >
                Get Home Value (CMA)
              </Link>
              <a
                href="https://www.secureloandocs.com/app/36495158"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Pre-Approved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
