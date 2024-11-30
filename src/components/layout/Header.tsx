'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { WalletModal } from '../common/WalletModal';
import { Toast } from '../common/Toast';
import { Logo } from '../common/Logo';

export function Header() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // 当移动菜单打开时禁止页面滚动
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // 处理 Club Service 点击
  const handleClubServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center">
          <Logo />
          
          {/* Desktop Navigation - 居中定位 */}
          <div className="hidden md:flex items-center justify-center flex-1 -ml-32">
            <nav className="flex items-center gap-12">
              <Link 
                href="/" 
                className="group relative text-base transition-colors duration-300"
              >
                <span className="relative z-10 group-hover:text-black">Home</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link 
                href="/shop" 
                className="group relative text-base transition-colors duration-300"
              >
                <span className="relative z-10 group-hover:text-black">Shop</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <button 
                onClick={handleClubServiceClick}
                className="group relative text-base transition-colors duration-300"
              >
                <span className="relative z-10 group-hover:text-black">Club Service</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </nav>
          </div>

          {/* Wallet Button - 右对齐 */}
          <div className="hidden md:block ml-auto">
            <button 
              onClick={() => setIsWalletModalOpen(true)}
              className="px-6 py-2 border border-black rounded-full text-base hover:bg-black hover:text-white transition-colors"
            >
              Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-50 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-y-[80px]' : 'translate-y-[-100%]'
          }`}
          style={{ top: '0', height: 'calc(100vh - 80px)' }}
        >
          <nav className={`flex flex-col items-center pt-12 px-6 h-full`}>
            <Link 
              href="/" 
              className="py-4 text-2xl hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="py-4 text-2xl hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <button 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleClubServiceClick(e);
              }}
              className="py-4 text-2xl hover:text-gray-600 transition-colors"
            >
              Club Service
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsWalletModalOpen(true);
              }}
              className="mt-8 px-8 py-3 border border-black rounded-full text-xl hover:bg-black hover:text-white transition-colors"
            >
              Wallet
            </button>
          </nav>
        </div>
      </header>

      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />

      <Toast 
        message="Features coming soon..."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
} 