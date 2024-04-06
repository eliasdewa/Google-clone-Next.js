"use client"
import { useEffect, useState } from "react"

 // we need to use some peace of state or hooks

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

  // to fetch data from api, use useEffect
  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then(res => res.json())
      .then(data => data.country);
      if (!res) return;
      setCountry(res);
    };
    getCountry();
  }, []) // to run one time, we just let [] empty
  return (
    <div>{country}</div>
  )
}
