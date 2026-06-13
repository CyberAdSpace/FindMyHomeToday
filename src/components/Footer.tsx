export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold">
              FindMyHome<span className="text-accent">Today</span>
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Real estate &amp; property management in Spring Hill, Florida.
              By Anthoney &amp; Maria.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              English &amp; Espa&ntilde;ol
            </p>
          </div>

          {/* Real Estate */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-3">
              Real Estate
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://findmyflhome.com/search.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  MLS Search
                </a>
              </li>
              <li>
                <a
                  href="https://findmyflhome.com/cmaform.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home Valuation (CMA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.secureloandocs.com/app/36495158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get Pre-Approved
                </a>
              </li>
            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-3">
              BAM Casas Rentals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#rentals"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Casa Uno
                </a>
              </li>
              <li>
                <a
                  href="#rentals"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Casa Dos
                </a>
              </li>
              <li>
                <a
                  href="#rentals"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  El Camper
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:352-345-3718"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  352-345-3718
                </a>
              </li>
              <li>
                <a
                  href="mailto:findmyhometoday@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  findmyhometoday@gmail.com
                </a>
              </li>
              <li className="text-gray-400">Spring Hill, FL</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Find My Home Today. All rights
            reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Anthoney Hamrick, REALTOR&reg; &middot; Tropic Shores Realty
          </p>
        </div>
      </div>
    </footer>
  );
}
