'use client';

import { useEffect, useRef, useState } from 'react';

export function TechnologyGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "MetaConnect Protocol (MCP)",
      description: "Bridging Physical Assets and NFTs",
      icon: "/images/Group 12861.svg"
    },
    {
      title: "Cross-chain Airdrop Technology",
      description: "Expanding NFT Rights Across Blockchains",
      icon: "/images/Group 12862.svg"
    },
    {
      title: "Encrypted Payment",
      description: "Secure Transactions for Real and Digital Assets",
      icon: "/images/Group 12863.svg"
    },
    {
      title: "Data Encryption & Privacy",
      description: "Safeguarding Digital Identities",
      icon: "/images/Group 12864.svg"
    }
  ];

  return (
    <section ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* 左侧固定内容 */}
        <div className="lg:w-[480px] lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-6xl lg:text-7xl font-normal leading-tight mb-8">
            MetaQuirk<br />Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-[400px]">
            We currently provide on-chain secure technical services, allowing you to easily generate NFT with one click
          </p>
        </div>

        {/* 右侧滚动内容 */}
        <div className="lg:flex-1">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-32 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start">
                  {/* 图标容器 - 增大尺寸 */}
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} alt="" className="w-24 h-24" />
                  </div>
                  {/* 文字内容 */}
                  <div className="ml-12">
                    <h3 className="text-[32px] font-normal mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 