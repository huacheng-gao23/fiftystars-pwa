"use client";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';

export default function TopNav() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false); // Downward scroll
      } else {
        setIsVisible(true); // Upward scroll
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`fixed z-50 top-0 left-0 w-full h-16 bg-gradient-to-b from-white via-white dark:from-black dark:via-black transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`fixed top-0 left-0 px-5 py-5 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <button className="hover:bg-sky-700" onClick={() => router.back()}>&lt;-Back</button>
      </div>
      <div className={`fixed top-0 right-0 px-5 py-5 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <button className="hover:bg-sky-700" onClick={() => router.push("/")}><HomeIcon fontSize="small" /></button>
      </div>
    </div>
  );
}
