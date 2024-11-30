'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from 'react';
import { Toast } from '@/components/common/Toast';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('benefits');
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});
  const [showToast, setShowToast] = useState(false);

  const productImages = [
    {
      src: '/images/black-tee.png',
      alt: 'Black T-shirt front view'
    },
    {
      src: '/images/white-tee.png',
      alt: 'White T-shirt front view'
    },
    {
      src: '/images/Product01.png',
      alt: 'Product detail 1'
    },
    {
      src: '/images/Product02.png',
      alt: 'Product detail 2'
    },
    {
      src: '/images/Product03.png',
      alt: 'Product detail 3'
    },
    {
      src: '/images/Product04.png',
      alt: 'Product detail 4'
    },
    {
      src: '/images/tee-shop.png',
      alt: 'T-shirt showcase'
    }
  ];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 'what-is-metaquirk',
      question: 'What is MetaQuirk',
      answer: 'MetaQuirk is a revolutionary platform that bridges the physical and digital worlds through NFT technology. We create unique digital identities for physical products, enabling a seamless connection between real-world items and their digital counterparts.'
    },
    {
      id: 'what-is-mcp',
      question: 'What is the MCP Protocol?',
      answer: 'The MetaConnect Protocol (MCP) is our proprietary technology that enables secure and verifiable connections between physical assets and their digital NFT representations. It ensures the authenticity and uniqueness of each item on the blockchain.'
    },
    {
      id: 'what-is-genesis',
      question: 'What is MetaQuirk Genesis',
      answer: 'MetaQuirk Genesis is our first product line that showcases the power of NFT-powered physical items. Each Genesis product comes with a unique digital identity and grants holders exclusive access to both physical benefits and digital privileges.'
    },
    {
      id: 'what-is-club-service',
      question: 'What is MetaQuirk Club Service',
      answer: 'MetaQuirk Club Service is our exclusive membership program that provides holders with special privileges, early access to new releases, and unique opportunities in both the physical and digital realms.'
    }
  ];

  const handlePaymentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            {/* 左侧产品图片区域 */}
            <div className="lg:w-1/2">
              {/* 主图显示区域 */}
              <div className="bg-white rounded-3xl p-8 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 transform transition-all duration-300 hover:scale-105">
                    <img 
                      src={productImages[activeImage].src} 
                      alt={productImages[activeImage].alt} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* 缩略图预览区域 */}
              <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button 
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                      activeImage === index ? 'border-2 border-black' : 'border border-gray-200'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={img.src} 
                        alt={`View ${index + 1}`} 
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 右侧产品信息 */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <h1 className="text-4xl font-normal mb-4">MetaQuirk Genesis</h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-xl text-gray-400 line-through">$329</span>
                </div>
              </div>

              {/* 产品信息表格 */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Blockchain</span>
                  <span>Base</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Token standard</span>
                  <span>ERC7765</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Contract Address</span>
                  <span>0x123...456</span>
                </div>
              </div>

              {/* 颜色选择 */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Color</span>
                  <div className="flex gap-4">
                    <button 
                      className={`w-20 h-10 rounded-full transition-colors ${
                        selectedColor === 'Black' 
                          ? 'bg-black text-white' 
                          : 'bg-white border border-gray-200 hover:border-black'
                      }`}
                      onClick={() => setSelectedColor('Black')}
                    >
                      Black
                    </button>
                    <button 
                      className={`w-20 h-10 rounded-full transition-colors ${
                        selectedColor === 'White' 
                          ? 'bg-black text-white' 
                          : 'bg-white border border-gray-200 hover:border-black'
                      }`}
                      onClick={() => setSelectedColor('White')}
                    >
                      White
                    </button>
                  </div>
                </div>
              </div>

              {/* 尺码选择 */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Size</span>
                  <div className="flex gap-4">
                    {['S', 'M', 'L'].map((size) => (
                      <button
                        key={size}
                        className={`w-12 h-12 rounded-full transition-colors ${
                          selectedSize === size 
                            ? 'bg-black text-white' 
                            : 'bg-white border border-gray-200 hover:border-black'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 数量选择器 */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-600">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-full">
                  <button 
                    className="px-4 py-2 hover:bg-gray-100 rounded-l-full"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <span className="px-4 min-w-[40px] text-center">{quantity}</span>
                  <button 
                    className="px-4 py-2 hover:bg-gray-100 rounded-r-full"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 总价和购买按钮 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-bold">${299 * quantity}</span>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={handlePaymentClick}
                    className="flex-1 px-6 py-3 bg-[#0052FF] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#0045CC] transition-colors"
                  >
                    <img src="/images/usdc.svg" alt="USDC" className="w-5 h-5" />
                    Buy Now USDC
                  </button>
                  <button 
                    onClick={handlePaymentClick}
                    className="flex-1 px-6 py-3 bg-black text-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <img src="/images/usdt.svg" alt="USDT" className="w-5 h-5" />
                    Buy Now USDT
                  </button>
                </div>
              </div>

              {/* 购买信息 */}
              <div className="mt-8 flex items-center justify-between text-gray-500 text-sm">
                <span>0x42...4f98 Purchased 1 day ago</span>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                </div>
              </div>
            </div>
          </div>

          {/* 标签导航 */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['benefits', 'product', 'brand', 'faq'].map((tab) => (
              <button 
                key={tab}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab 
                    ? 'bg-black text-white' 
                    : 'border border-gray-200 hover:border-black'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'benefits' && 'Benefits and Privileges'}
                {tab === 'product' && 'Product Detail'}
                {tab === 'brand' && 'Brand Story'}
                {tab === 'faq' && 'FAQ'}
              </button>
            ))}
          </div>

          {/* 标签内容 */}
          <div className="bg-white rounded-[55px] p-12 mb-20">
            {/* Benefits 内容 */}
            {activeTab === 'benefits' && (
              <div className="max-w-[1000px] mx-auto space-y-6">
                {/* 第一个卡片：Welcome */}
                <div className="bg-white rounded-[55px] p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10 gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <img src="/images/avatar.svg" alt="Avatar" className="w-14 h-14" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-normal mb-2">Welcome, Young</h2>
                        <p className="text-base text-gray-600">You have new airdrops that have not been claimed</p>
                      </div>
                    </div>
                    <button className="w-full md:w-auto px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors text-base">
                      Mint
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    <div>
                      <p className="text-base text-gray-600 mb-2">Wallet Address</p>
                      <p className="text-xl md:text-2xl font-normal">2/10</p>
                    </div>
                    <div className="md:border-x border-gray-200 md:px-12">
                      <p className="text-base text-gray-600 mb-2">Airdrop</p>
                      <p className="text-xl md:text-2xl font-normal">1/10</p>
                    </div>
                    <div>
                      <p className="text-base text-gray-600 mb-2">Delivery Address</p>
                      <p className="text-xl md:text-2xl font-normal break-all">dewshskp@163.com</p>
                    </div>
                  </div>
                </div>

                {/* 第二个卡片：MetaQuirk Club */}
                <div className="bg-white rounded-[55px] p-8 md:p-12">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="/images/avatar.svg" alt="Avatar" className="w-14 h-14" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-normal">MetaQuirk Club</h2>
                  </div>
                  <p className="text-base text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-[90%]">
                    At MetaQuirk, we are committed to breaking the boundaries between the real world and the digital world, and transforming the items around you into unique digital assets (NFTs) through innovative blockchain technology and encryption algorithms. From fashion apparel to lifestyle accessories, and even future Depin devices, MetaQuirk not only gives each item a unique digital identity, but also guarantees its authenticity and uniqueness on any public chain.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="w-full md:w-auto px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 text-base">
                      <img src="/images/tg.svg" alt="" className="w-5 h-5" />
                      Join Telegram
                    </button>
                    <button className="w-full md:w-auto px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 text-base">
                      <img src="/images/x.svg" alt="" className="w-5 h-5" />
                      Follow X
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Product Detail 内容 */}
            {activeTab === 'product' && (
              <div className="space-y-24">
                {/* MetaQuirk Tee 容器 */}
                <div>
                  <h2 className="text-3xl mb-6">MetaQuirk Tee</h2>
                  <p className="text-gray-600 mb-8">
                    MetaQuirk is proud to launch its first apparel product, the MetaQuirk Genesis Tee. This T-shirt is not only a fashion item but also a symbol of the perfect integration of the MetaQuirk brand and blockchain technology.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="aspect-square bg-[#F9F9F9] rounded-3xl overflow-hidden">
                      <img 
                        src="/images/white-tee.png" 
                        alt="White T-shirt front view" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square bg-[#F9F9F9] rounded-3xl overflow-hidden">
                      <img 
                        src="/images/black-tee.png" 
                        alt="Black T-shirt front view" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square bg-[#F9F9F9] rounded-3xl overflow-hidden">
                      <img 
                        src="/images/Product01.png" 
                        alt="T-shirt back view" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Reflective Material Patch 容器 */}
                <div>
                  <h2 className="text-3xl mb-6">Reflective Material Patch</h2>
                  <p className="text-gray-600 mb-8">
                    We specially select our own custom reflective material, which not only adds a sense of fashion, but also contains deep meaning.
                  </p>
                  <div className="bg-[#F9F9F9] rounded-3xl p-8">
                    <img 
                      src="/images/Product01.png" 
                      alt="Reflective patches" 
                      className="w-full max-w-[600px] mx-auto"
                    />
                  </div>
                  <p className="text-xl text-center mt-6">"Welcome to the real world"</p>
                </div>

                {/* Hash Code 容器 */}
                <div>
                  <h2 className="text-3xl mb-6">Hash Code</h2>
                  <p className="text-gray-600 mb-8">
                    We specially print a unique hash code on the back hem of each garment, symbolizing that everyone who wears MetaQuirk clothing is an explorer who builds a bridge between the real world and the digital world.
                  </p>
                  <div className="bg-[#F9F9F9] rounded-3xl p-8">
                    <div className="bg-white rounded-3xl p-6">
                      <code className="text-sm break-all">
                        0x9791a35803d35b5b0773f27195b8b325f82eedce4ae90983544796b14
                      </code>
                    </div>
                  </div>
                </div>

                {/* Size Info 部分保持不变 */}
                <div>
                  <h2 className="text-3xl mb-6">Size Info</h2>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-4 text-left">Size</th>
                        <th className="py-4 text-left">S</th>
                        <th className="py-4 text-left">M</th>
                        <th className="py-4 text-left">L</th>
                        <th className="py-4 text-left">XL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4">Body length</td>
                        <td>70</td>
                        <td>72</td>
                        <td>74</td>
                        <td>76</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4">Shoulder width</td>
                        <td>60</td>
                        <td>62</td>
                        <td>64</td>
                        <td>66</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4">Chest width</td>
                        <td>122</td>
                        <td>126</td>
                        <td>130</td>
                        <td>134</td>
                      </tr>
                      <tr>
                        <td className="py-4">Sleeve length</td>
                        <td>35</td>
                        <td>36</td>
                        <td>37</td>
                        <td>38</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Brand Story 内容 */}
            {activeTab === 'brand' && (
              <div className="max-w-[1000px] mx-auto text-center">
                <h1 className="text-5xl font-normal mb-8">MetaQuirk Genesis</h1>
                <p className="text-lg text-gray-600 mb-16 max-w-[800px] mx-auto leading-relaxed">
                  MetaQuirk Genesis is the first Genesis product built by MetaQuirk through MetaQuirk Club. Each T-shirt is given an NFT digital identity, and the holder not only owns the physical product, but also can obtain privileges in the virtual world and cross-chain asset airdrops.
                </p>
                <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors text-lg">
                  Use MetaQuirk Club
                </button>
              </div>
            )}

            {/* FAQ 内容 */}
            {activeTab === 'faq' && (
              <div className="max-w-[800px] mx-auto space-y-6">
                {faqData.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200">
                    <button 
                      className="w-full flex items-center justify-between py-6 text-left"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <h3 className="text-2xl font-normal">{faq.question}</h3>
                      <span className="text-2xl transition-transform duration-300" style={{
                        transform: openFAQs[faq.id] ? 'rotate(45deg)' : 'rotate(0)'
                      }}>
                        +
                      </span>
                    </button>
                    {openFAQs[faq.id] && (
                      <div className="pb-6 text-gray-600 text-lg leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {/* Toast 提示 */}
      <Toast 
        message="Please connect Web3 wallet"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
} 