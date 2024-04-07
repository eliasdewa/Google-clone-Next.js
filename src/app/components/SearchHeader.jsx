import Image from 'next/image';
import SearchBox from './SearchBox';
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-[#fff]'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href='/'>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" alt='Google logo' width={120} height={40} style={{width: "auto"}} priority/>
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer"/>
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer"/>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow cursor-pointer ml-3"> Sign In</button>
      </div>
    </header>
  )
}
