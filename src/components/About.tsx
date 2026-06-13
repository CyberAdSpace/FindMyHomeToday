export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold uppercase tracking-wide text-sm">
              Nuestra Historia / Our Story
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Meet Anthoney &amp; Maria
            </h2>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Find My Home Today is more than a real estate business &mdash;
              it&apos;s a family dream brought to life. By Anthoney &amp; Maria
              &mdash; a gringo and a Latina who came together with a shared
              passion for hospitality and making people feel welcome.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Based in beautiful Spring Hill, Florida, we offer both real estate
              services and property management with the personal touch that only
              family-run businesses can offer.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Whether you&apos;re buying your first home, investing in property,
              visiting Florida for vacation, or just need a comfortable place to
              stay &mdash; we treat every client like family.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-warm rounded-xl px-6 py-4 text-center">
                <p className="text-2xl font-bold text-primary">REALTOR&reg;</p>
                <p className="text-sm text-gray-600">Licensed Agent</p>
              </div>
              <div className="bg-warm rounded-xl px-6 py-4 text-center">
                <p className="text-2xl font-bold text-primary">Bilingual</p>
                <p className="text-sm text-gray-600">EN &amp; ES</p>
              </div>
              <div className="bg-warm rounded-xl px-6 py-4 text-center">
                <p className="text-2xl font-bold text-primary">Family</p>
                <p className="text-sm text-gray-600">Run Business</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">
                  Real Estate
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Servicios Inmobiliarios
                </p>
                <p className="text-gray-600 mt-2">
                  Buy, sell, or invest in Florida property with a Realtor who
                  knows the local market and delivers bilingual,
                  family-first service.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">
                  BAM Casas
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Property Management
                </p>
                <p className="text-gray-600 mt-2">
                  Thoughtfully maintained rental properties in Spring Hill.
                  Fully furnished homes designed to make you feel at home from
                  the moment you walk in.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">
                  Two Cultures
                </h3>
                <p className="text-sm text-gray-500 mt-1">Dos Culturas</p>
                <p className="text-gray-600 mt-2">
                  Blending the best of American &amp; Latin hospitality. We
                  speak English &amp; Espa&ntilde;ol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
