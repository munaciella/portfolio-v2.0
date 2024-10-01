import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import circleText from '../../public/images/Web_Developer_Software_Engineer-transformed.png'

const HireMe = () => {
  return (
    <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <Image src={circleText} alt='Francesco Dev Circular Text' className={'fill-dark animate-spin-slow'} />
            {/* <CircularText className={'fill-dark animate-spin-slow'} /> */}
            <Link href="mailto:francesco.vurchio82@gmail.com" target={"_blank"} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'>
            Hire Me
            </Link>
    </div>
    </div>
  )
}

export default HireMe