'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useRouter } from 'next/navigation';

export default function ShopPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10 lg:py-20">
          <div className="bg-white rounded-[55px] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-8 lg:p-16">
                <h1 className="text-4xl lg:text-6xl font-normal mb-5 lg:mb-7">
                  MetaQuirk Genesis
                </h1>
                <p className="text-xl lg:text-2xl mb-3 lg:mb-5">
                  The key to the real and digital worlds
                </p>
                <p className="text-xl lg:text-2xl mb-6 lg:mb-8">
                  "Welcome to the real world"
                </p>
                <button 
                  onClick={() => router.push('/shop/product')} 
                  className="w-full lg:w-auto px-10 py-2.5 border border-black rounded-full hover:bg-black hover:text-white transition-colors text-lg"
                >
                  Buy
                </button>
              </div>
              <div className="w-full lg:w-1/2 p-6 lg:p-0">
                <img 
                  src="/images/tee-shop.png" 
                  alt="MetaQuirk Genesis Product" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10 lg:mt-16">
            <p className="text-base lg:text-lg text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 