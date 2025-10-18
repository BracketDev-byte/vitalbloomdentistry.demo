import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 text-white font-bold text-sm">VB</div>
              </div>
              <span className="text-xl font-medium">Vital Bloom</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Comprehensive biological dental care that nurtures your
              vitality and well-being. Mercury-free, biocompatible, and
              naturally healing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="text-sm space-y-2 text-white/80">
              <li>
                <Link href={'/services/mercury-free-fillings'}>
                  Mercury-Free Fillings
                </Link>
              </li>
              <li>
                <Link href={'/services/ceramic-implants'}>
                  Ceramic Implants
                </Link>
              </li>
              <li>
                <Link href={'/services/ozone-therapy'}>Ozone Therapy</Link>
              </li>
              <li>
                <Link href={'/services/holistic-dental-cleanings'}>
                  Holistic Dental Cleanings
                </Link>
              </li>
              <li>
                <Link href={'/services/nutritional-counseling'}>
                  Nutritional Counseling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm space-y-2 text-white/80">
              <p>123 Wellness Boulevard</p>
              <p>Natural City, NC 12345</p>
              <p>(555) 123-4567</p>
              <p>info@vitalbloomdentistry.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Office Hours</h4>
            <div className="text-sm space-y-1 text-white/80">
              <p>Mon-Thu: 8:00 AM - 5:00 PM</p>
              <p>Fri: 8:00 AM - 3:00 PM</p>
              <p>Sat: By appointment</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/75">
            <p>&copy; 2025 Vital Bloom Biological Dentistry. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
