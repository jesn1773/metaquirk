'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  const handleClick = (e: React.MouseEvent) => {
    console.log('Logo clicked');
  };

  return (
    <Link 
      href="/" 
      className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleClick}
      prefetch={true}
    >
      <div className="relative w-[120px] h-8">
        <Image 
          src="/images/logo.svg"
          alt="MetaQuirk Logo" 
          fill
          sizes="120px"
          className="object-contain"
          priority
          unoptimized
        />
      </div>
    </Link>
  );
} 