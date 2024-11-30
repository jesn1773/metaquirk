'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toast } from '../common/Toast';

export function ProductShowcase() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* MetaQuirk Genesis 产品卡片 */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="p-12">
            <h2 className="text-4xl font-normal mb-4">MetaQuirk Genesis</h2>
            <p className="text-xl mb-6">The key to the real and digital worlds</p>
            <button 
              onClick={() => router.push('/shop/product')}
              className="px-8 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Buy
            </button>
          </div>
          <div className="px-12 pb-12 overflow-hidden">
            <img 
              src="/images/tee.png" 
              alt="MetaQuirk Genesis Product" 
              className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => router.push('/shop/product')}
            />
          </div>
        </div>

        {/* MetaQuirk Club 产品卡片 */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="p-12">
            <h2 className="text-4xl font-normal mb-4">MetaQuirk Club</h2>
            <p className="text-xl mb-6">Unlock NFT-Powered Membership and Rewards</p>
            <button 
              onClick={handleLearnMoreClick}
              className="px-8 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Learn More
            </button>
          </div>
          <div className="px-12 pb-12 overflow-hidden">
            <img 
              src="/images/Vector2.svg" 
              alt="MetaQuirk Club" 
              className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={handleLearnMoreClick}
            />
          </div>
        </div>
      </div>

      <Toast 
        message="Features coming soon..."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
} 