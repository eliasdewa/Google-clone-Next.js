import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <CountryLookup />
      </div>
      <div className='flex flex-col items-center sm:flex-row justify-between px-8 py-3 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Business</li>
          <li className='hover:underline cursor-pointer'>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Setting</li>
        </ul>
      </div>
    </footer>
  )
}
