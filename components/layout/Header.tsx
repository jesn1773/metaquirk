'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WalletModal } from '../common/WalletModal';

export const Header = () => {
  const [showClubModal, setShowClubModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="MetaQuirk Logo" className="h-8" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            <Link href="/" className="text-xl hover:underline">Home</Link>
            <Link href="/shop" className="text-xl hover:underline">Shop</Link>
            <button 
              onClick={() => setShowClubModal(true)}
              className="text-xl hover:underline"
            >
              Club Service
            </button>
          </div>

          {/* Wallet Button */}
          <button
            onClick={() => setShowWalletModal(true)}
            className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Wallet
          </button>
        </nav>
      </div>

      {/* Club Service Modal */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showClubModal ? '' : 'hidden'}`}>
        <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-normal">Club Service</h2>
            <button 
              onClick={() => setShowClubModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>
          <p className="text-center text-gray-600">Coming soon...</p>
        </div>
      </div>

      {/* Wallet Modal */}
      <WalletModal 
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
      />
    </header>
  );
}; 