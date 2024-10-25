'use client'
import React from 'react'
import { NextPage } from 'next';
import Head from 'next/head';
import Profile from '@/components/Profile';
import AnimatedText from '@/components/AnimatedText';

const ArticlesPage: NextPage = () => {
  return (
      <>
      <Head>
        <title>Francesco Dev | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Profile className="pt-16">
            <AnimatedText text="Words Can Change The World!" className="mb-16" />
            <ul className='grid grid-cols-2 gap-16'>
                <li>Latest articles-1</li>
                <li>Latest articles-2</li>
            </ul>
        </Profile>
      </main>
      </>
    )
}

export default ArticlesPage