import WebSearchResults from "@/app/components/WebSearchResults";
import Link from "next/link";

export default async function WebSearchPage({searchParams}) {
  // for loading effect
  await new Promise(resolve => setTimeout(resolve, 1000));
  // create a request for api
  const startIndex = searchParams.start || '1';
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);

  if (!res.ok) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Something went wrong!</h1>
        <p className="text-lg">
          <Link href="/" className='text-blue-500 cursor-pointer hover:underline'>Try again</Link>
        </p>
      </div>
    )
  }
  const data = await res.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchParams.searchTerm}</h1>
        <p className="text-lg">Try searching the web or images for Something else. {' '}
          <Link href="/" className='text-blue-500 cursor-pointer'>Home</Link>
        </p>
      </div>
    )
  }
  return (
    <div>
      {results && <WebSearchResults results={data}/>}
    </div>
  )
}
