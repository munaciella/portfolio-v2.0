import React from 'react';
import Layout from './Profile';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Made With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          by &nbsp;
          <Link href="https://github.com/munaciella" target={'_blank'}>
            <Image
              className="ml-0"
              src="/FranIcon.png"
              alt="Francesco's Image"
              width={28}
              height={28}
            />
          </Link>
        </div>
        <span>Built with Next.js & Typescript</span>
      </Layout>
    </footer>
  );
};

export default Footer;
