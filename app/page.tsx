'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductShowcase } from "@/components/features/ProductShowcase";
import { TechnologyGrid } from "@/components/features/TechnologyGrid";
import { FAQSection } from "@/components/features/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 lg:py-20 relative">
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-grid opacity-[0.15]"></div>
          
          <div className="relative"> {/* 添加 relative 使内容在网格之上 */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              {/* 左侧内容 - 固定尺寸 */}
              <div className="w-full lg:w-[640px] min-h-[400px]">
                <div className="lg:max-w-[560px]">
                  <h1 className="text-[56px] lg:text-[96px] font-normal leading-tight mb-6">
                    MetaQuirk
                  </h1>
                  <p className="text-2xl lg:text-[32px] leading-tight mb-12">
                    Connects the real and virtual worlds through NFT technology
                  </p>
                  {/* 标签容器 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px]">
                    <span className="px-4 py-2 rounded-full border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors text-center">
                      Reality + NFT
                    </span>
                    <span className="px-4 py-2 rounded-full border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors text-center">
                      MCP Protocol
                    </span>
                    <span className="px-4 py-2 rounded-full border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors text-center">
                      Cross-chain
                    </span>
                    <span className="px-4 py-2 rounded-full border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors text-center">
                      On Blockchain
                    </span>
                    <span className="px-4 py-2 rounded-full border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors text-center">
                      Virtual Assets
                    </span>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[500px]">
                <img 
                  src="/images/Vector.svg" 
                  alt="Sphere Graphic" 
                  className="w-full h-full animate-spin-slow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 分割线 */}
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* Product Showcase Section */}
        <ProductShowcase />

        {/* 分割线 */}
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* Technology Section */}
        <TechnologyGrid />

        {/* 分割线 */}
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
