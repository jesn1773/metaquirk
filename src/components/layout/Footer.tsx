'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const footerLinks = {
    serve: {
      title: 'Serve',
      links: [
        { name: 'Help Center', href: '/help-center' },
        { name: 'FAQS', href: '/faqs' },
      ],
    },
    products: {
      title: 'Products',
      links: [
        { name: 'MetaQuirk Club Service', href: '/club-service' },
        { name: 'MetaQuirk Genesis', href: '/genesis' },
        { name: 'MetaSheep', href: '/metasheep' },
      ],
    },
    community: {
      title: 'Community',
      links: [
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'Telegram', href: 'https://telegram.org' },
      ],
    },
    contactUs: {
      title: 'Contact Us',
      links: [
        { name: 'Email', href: 'mailto:contact@metaquirk.com' },
      ],
    },
  };

  return (
    <footer className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and Copyright */}
          <div className="lg:col-span-1">
            <img src="/images/logo.svg" alt="MetaQuirk Logo" className="h-6 mb-6" />
            <p className="text-sm text-gray-600">
              Copyright © 2024<br />
              MetaQuirk. All rights<br />
              reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-xl mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 