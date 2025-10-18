'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import Button from './MyButton';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function HeaderComp() {
  const router = useRouter();

  const navigateToContact = () => {
    // Navigate to the contact page
    router.push('/contact');
  };

  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'About', url: '/about' },
    { label: 'Blogs', url: '/blogs' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <header className="box-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-25">
        <div className="flex flex-row justify-between items-center h-12">
          {/*Logo Left */}
          <Link href={'/'}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 text-white font-bold text-sm">VB</div>
              </div>
              <span className="text-xl font-medium text-gray-900">
                Vital Bloom
              </span>
            </div>
          </Link>

          {/*Desktop Nav middle */}
          <nav className="hidden md:flex text-md items-center space-x-6 lg:space-x-10 ">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`${link.url}`}
                className={` ${
                  pathName === link.url
                    ? 'font-semibold text-primary'
                    : 'text-gray-700 hover:text-teal-400 transition-colors'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/*right side */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              href={'tel:(555) 123-4567'}
              className="flex gap-2 items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </Link>
            <Button onClick={navigateToContact}>Book Now</Button>
          </div>

          {/*Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/*Mobile Menu */}
          {isOpen && (
            <nav className="absolute top-full left-0 right-0 bg-white border-t shadow-lg md:hidden">
              <div className="px-4 py-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Link
                    href="tel:(555) 123-4567"
                    className="flex items-center gap-2 text-teal-500 hover:text-teal-300 transition-colors mb-3"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">(555) 123-4567</span>
                  </Link>
                  <button
                    onClick={navigateToContact}
                    className="w-full py-1 font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-400"
                  >
                    Book Online
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
