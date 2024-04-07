"use client"
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation"; // to get the search params
import { useState } from "react";

export default function SearchBox() {
  // to get the search params from the url
  const searchParams = useSearchParams();
  // to get the url after the "searchTerm"
  const searchTerm = searchParams.get('searchTerm');
  // add a state
  const [term, setTerm] = useState(searchTerm || "");

  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    // if the input is empty, we can't submit anything
    if (!term.trim()) return;
    // otherwise push to the url
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
      <input type="text" className="w-full focus:outline-none" value={term} onChange={e => setTerm(e.target.value)}/>
      <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={() => setTerm("")}/>
      <BsFillMicFill className="text-4xl hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 mr-3 pl-4 cursor-pointer"/>
      <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" onClick={handleSubmit}/>
    </form>
  )
}
