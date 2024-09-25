'use client';
import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import type { NextPage } from 'next';
import Profile from '@/components/Layout';

const HomePage: NextPage = () => {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Profile className="pt-2">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Image of developer"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Profile>
      </main>
    </>
  );
};

export default HomePage;
