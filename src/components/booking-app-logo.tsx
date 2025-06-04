import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogLogo = () => {
  return (
    <Link className="inline-flex items-center gap-2" href="/">
      <Image src="/images/logo-studigo-no-bg.png" alt="STUDIGO LOGO" height={60} width={60} />
      <h1 className="flex text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-br from-yellow-400 to-blue-600">
        STUDIGO
      </h1>
    </Link>
  );
};

export default BlogLogo;
