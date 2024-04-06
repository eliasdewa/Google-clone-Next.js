"use client"

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill} from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  // To get information from the search input, we need to state
  const [input, setInput] = useState('');
  // console.log(input);

  // To add a loading spinner on random search, we need to
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  // To change the url for the search input,
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // If we don't have a search input value, then return nothing
    if (!input.trim()) return; // trim => to cut out the spaces
    // we need a hook => useRouter
    router.push(`/search/web?searchTerm=${input}`);
  };

  // random search for 'I am feeling lucky' button
  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    // create a request api for random word
    const res = await fetch("https://random-word-api.herokuapp.com/word").then(res => res.json()).then((data) => data[0]);
    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3 cursor-pointer' onClick={handleSubmit} />
        <input type="text" className='flex-grow focus:outline-none' onChange={e => setInput(e.target.value)}/>
        <BsFillMicFill className='text-lg cursor-pointer'/>
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
        <button onClick={handleSubmit} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>Google Search</button>
        <button onClick={randomSearch} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow' disabled={randomSearchLoading}>{randomSearchLoading ? "Loading..." : "I am Feeling Lucky"}</button>
      </div>
    </>
  )
}
