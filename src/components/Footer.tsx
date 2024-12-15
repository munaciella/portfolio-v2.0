import React from 'react';
import Layout from './Profile';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '../../public/Fran-avatar.png';
import logo from '../../public/Logo.png';
import { GithubIcon, LinkedInIcon, XIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base mt-24 xl:mt-0 sm:mt-12 lg:mt-10">
      <Layout className="py-8 md:py-2 lg:py-6 xl:py-14 px-8 grid grid-cols-2 gap-4 lg:grid-cols-1 lg:text-center">

        {/* Logo and Description */}
        <div className="flex flex-col items-start lg:items-center">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="dark:invert"
            />
            <span className="ml-2 text-xl font-bold">Francesco.Dev</span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Crafting impactful applications and modern solutions.
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-start lg:items-center">
          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Follow Me
          </h4>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" aria-label="X">
              <XIcon className="text-xl hover:text-primary dark:hover:text-primaryDark mt-1" />
            </Link>
            <Link href="https://github.com/munaciella" target="_blank" aria-label="GitHub">
              <GithubIcon className="text-2xl hover:text-primary dark:hover:text-primaryDark" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/francesco-vurchio/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="text-2xl hover:text-primary dark:hover:text-primaryDark" />
            </Link>
          </div>
        </div>

        {/* Made With Section */}
<div className="flex flex-col items-start lg:items-center mt-6">
  <p className="text-md font-semibold flex items-center space-x-1">
    Made with{' '}
    <span className="text-primary dark:text-primaryDark text-2xl px-1">
      &#9825;
    </span>{' '}
    by{' '}
    <Link
      href="https://github.com/munaciella"
      target="_blank"
      className="flex items-center space-x-2 ml-1 underline"
    >
      <Image
        src={avatar}
        alt="Francesco's Image"
        width={36}
        height={36}
        className="dark:rounded-full dark:bg-light"
      />
    </Link>
  </p>
</div>

        {/* Legal Section */}
        <div className="flex flex-col items-start lg:items-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            &copy; {new Date().getFullYear()} Francesco.Dev. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          <Link href="/privacy-policy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/cookie-policy" className="hover:underline underline-offset-4">
              Cookie Policy
            </Link>
            </p>
        </div>

      </Layout>
    </footer>
  );
};

export default Footer;
