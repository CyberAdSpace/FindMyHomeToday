const properties = [
  {
    name: "Casa Uno",
    location: "Spring Hill, FL",
    status: "Available",
    statusColor: "bg-green-500",
    description:
      "A cozy and welcoming home perfect for families or couples looking to enjoy the beauty of Florida's Nature Coast. Fully furnished with all the comforts of home.",
    amenities: ["Comfortable Beds", "Full Kitchen", "WiFi"],
    icon: "\uD83C\uDFE0",
  },
  {
    name: "Casa Dos",
    location: "Spring Hill, FL",
    status: "Available",
    statusColor: "bg-green-500",
    description:
      "Another beautiful rental in the heart of Spring Hill. Designed with comfort and style in mind, this property is ideal for your Florida getaway or extended stay.",
    amenities: ["Comfortable Beds", "Full Kitchen", "WiFi"],
    icon: "\uD83C\uDFE0",
  },
  {
    name: "El Camper",
    location: "Spring Hill, FL",
    status: "Coming Soon",
    statusColor: "bg-amber-500",
    description:
      "Something exciting is on the way! Our tow-behind camper will offer a unique glamping experience right here in Spring Hill. Stay tuned for details.",
    amenities: ["Unique Experience", "Outdoor Living", "Coming Soon"],
    icon: "\uD83D\uDE9B",
  },
];

export default function Rentals() {
  return (
    <section id="rentals" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide text-sm">
            Nuestras Propiedades / Our Properties
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            BAM Casas Rentals
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            By Anthoney &amp; Maria &mdash; a gringo y una Latina. Your home
            away from home in Spring Hill, Florida. We treat every guest like
            family.
          </p>
        </div>

        {/* Value props */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Family-Run",
              labelEs: "Familiar",
              desc: "Personal attention to every detail and every guest.",
            },
            {
              label: "With Love",
              labelEs: "Con Amor",
              desc: "Every property is cared for like our own home.",
            },
            {
              label: "Two Cultures",
              labelEs: "Dos Culturas",
              desc: "Blending the best of American & Latin hospitality.",
            },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">{item.label}</h3>
              <p className="text-xs text-accent font-medium">{item.labelEs}</p>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Property cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/5 p-8 text-center">
                <span className="text-6xl">{property.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {property.name}
                  </h3>
                  <span
                    className={`${property.statusColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {property.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  {property.location}
                </p>
                <p className="text-gray-600 text-sm">{property.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-warm text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="block mt-6 text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  {property.status === "Coming Soon"
                    ? "Get Notified"
                    : "Inquire Now"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
