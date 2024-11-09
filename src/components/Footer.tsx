import React from 'react';
import Layout from './Profile';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '../../public/Fran-avatar.png';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 xl:py-8 sm:py-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:">
          Made With{' '}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by &nbsp;
          <Link href="https://github.com/munaciella" target={'_blank'}>
            <Image
              src={avatar}
              alt="Francesco's Image"
              width={12}
              height={12}
              priority
              className="ml-0 w-12 h-12 dark:bg-light dark:rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <span>Built with Next.js & Typescript</span>
      </Layout>
    </footer>
  );
};

export default Footer;
