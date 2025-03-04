'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CenterUnderline from './CenterUnderline';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  path: string;
};

const list: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Herbal Profiles',
    path: '/herbal-profiles',
  },
  {
    label: 'ATBS',
    path: '/atbs',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    let timeout: any;
    if (show) {
      timeout = setTimeout(() => {
        setShowAlt(true);
      }, 1);
    } else setShowAlt(false);

    return () => clearTimeout(timeout);
  }, [show]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change 50 to adjust sensitivity
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  const items = list.map((item) => (
    <li
      key={item.label}
      className={`font-normal text-md ${
        pathname === item.path
          ? 'text-purple-100'
          : 'text-purple-300 hover:text-white transition-all duration-200'
      }`}
    >
      <Link href={item.path}>
        <CenterUnderline label={item.label} />{' '}
      </Link>
    </li>
  ));
  return (
    <nav
      className={`z-50 p-4 transition-all duration-300 py-8 bg-purple-900 sticky left-0 right-0 top-0 w-full`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {!isScrolled && (
            <Link href="/">
              <figure className="w-[8rem]">
                <Image src="/logo.png" width={500} height={500} alt="" />
              </figure>
            </Link>
          )}

          <ul className="hidden md:flex items-center gap-8">{items}</ul>

          <ul className="flex items-center gap-8 text-white">
            <Link href={'/'} className="" legacyBehavior passHref>
              <a>
                <li className="grid place-items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-bag group-hover:scale-110 transition-all duration-200"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </li>
              </a>
            </Link>

            <Link href={'/'} className="" legacyBehavior passHref>
              <a>
                <li className="grid place-items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-round group-hover:scale-110 transition-all duration-200"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </li>
              </a>
            </Link>

            {/* <Link href={'/'} className="" legacyBehavior passHref>
                <a>
                  <li className="border bg-transparent group border-white transition-all duration-200 p-2 h-[3rem] w-[3rem] grid place-items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-menu group-hover:scale-110 transition-all duration-200"
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                  </li>
                </a>
              </Link> */}
          </ul>

          {isScrolled && (
            <button
              onClick={() => setShow(!show)}
              className="grid w-[4rem] h-[4rem] border border-purple-500 rounded-full p-2 text-white place-items-center md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        {show && (
          <div className="fixed top-0 left-0 w-full h-screen z-50">
            <div
              className="bg-black opacity-30 w-full h-full absolute top-0 left-0 z-10 cursor-pointer"
              onClick={() => setShow(!show)}
            ></div>

            <div
              className={cn(
                'h-full absolute top-0 transition-all duration-400 z-20 grid items-center px-8 w-max overflow-y-auto bg-white',
                showAlt ? 'left-0' : '-left-100'
              )}
            >
              <ul className="grid -mt-10 gap-4 text-3xl">
                {list.map((item) => (
                  <li
                    key={item.label}
                    className={
                      pathname === item.path
                        ? 'text-purple-500'
                        : 'text-gray-500 hover:text-black'
                    }
                  >
                    <Link href={item.path}>
                      <CenterUnderline label={item.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
export default Navbar;
