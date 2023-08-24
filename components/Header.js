// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'; 

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const isActive = (path) => {
        return router.pathname === path ? "text-green-200" : "text-white";
    }


    return (
        <>
    
    {/* モバイル用のドロワーメニュー */}
    <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden fixed top-0 left-0 w-full h-full z-50 bg-gray-900 text-white text-sm md:text-4xl`}>
          <ul className="flex flex-col items-center justify-center space-y-10 md:space-y-20 mt-32">
          <li>
      <Link href="/" onClick={() => setIsOpen(false)} className={isActive("/")} >Home</Link>
    </li>
          <li>
      <Link href="/portrait" onClick={() => setIsOpen(false)} className={isActive("/portrait")}>Portrait</Link>
    </li>
          <li>
      <Link href="/square" onClick={() => setIsOpen(false)} className={isActive("/square")}>Square</Link>
    </li>
          <li>
      <Link href="/cinematic" onClick={() => setIsOpen(false)} className={isActive("/cinematic")}>Cinematic</Link>
    </li>
          <li>
      <Link href="/vertical" onClick={() => setIsOpen(false)} className={isActive("/vertical")}>Vertical</Link>
    </li>
          <li>
      <Link href="/photo" onClick={() => setIsOpen(false)} className={isActive("/photo")}>Photo</Link>
    </li>
          <li>
      <Link href="/widescreen" onClick={() => setIsOpen(false)} className={isActive("/widescreen")}>Widescreen</Link>
    </li>
            {/* ... 他のリンクを同様に */}
          </ul>
        </div>
    <div className="container mx-auto max-w-4xl mt-10 md:max-w-6xl md:mt-16 lg:max-w-7xl lg:mt-24 xl:max-w-9xl">
    <div className='flex flex-cols-2 flex-nowrap justify-between items-center mx-8 lg:flex-col mb-4'>
      {/* ハンバーガーメニューボタン */}
    <h1 className="text-center text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl"><span className='text-green-300'>AI</span> ART GALLERY</h1>
    <button className="lg:hidden p-2 left-0 top-0 bg-gray-100 rounded-md" onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-4 h-0.5 bg-green-600 mb-1"></span>
          <span className="block w-4 h-0.5 bg-green-600 mb-1"></span>
          <span className="block w-4 h-0.5 bg-green-600"></span>
    </button>
    </div> 
      <ul className="hidden lg:flex items-center justify-center text-lg space-x-9 m-7">
    <li>
      <Link href="/"className={isActive("/")}>Home</Link>
    </li>
    <li>
      <Link href="/portrait" className={isActive("/portrait")}>Portrait</Link>
    </li>
    <li>
      <Link href="/square" className={isActive("/square")}>Square</Link>
    </li>
    <li>
      <Link href="/cinematic" className={isActive("/cinematic")}>Cinematic</Link>
    </li>
    <li>
      <Link href="/vertical" className={isActive("/vertical")}>Vertical</Link>
    </li>
    <li>
      <Link href="/photo" className={isActive("/photo")}>Photo</Link>
    </li>
    <li>
      <Link href="/widescreen" className={isActive("/widescreen")}>Widescreen</Link>
    </li>
  </ul>
    </div>
        </>
    );
}
