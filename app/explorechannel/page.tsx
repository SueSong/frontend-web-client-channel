/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/4Uvt79XcqnQ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
"use client"
import React, { useState,useEffect,ChangeEvent, JSX, SVGProps} from 'react';
import Image from "next/image"
import {Input} from "@nextui-org/input"
import Link from "next/link"

 
export default function ChannelList() {

    const [results, setResults] = useState<
    {
      result:
        {
          id: string,
          name: string,
          createAt: string,
          owner_id: string,
          updatedAt: string
        }[]
   
    }>();
 
    useEffect(() => {
    fetch('/api/channel/list').then((res) => res.json())
   // fetch('/channel/api/channel/list').then((res) => res.json())
      .then((data) => setResults(data));

  }, []);

  const [searchTerm, setSearchTerm] = useState("")

    const handleFilter = (event:ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase()
        setSearchTerm(term)

        if (results?.result) {
          // Filter the results based on the 'name' property and search term
          const filteredResults = results.result.filter(result =>
            result.name && result.name.toLowerCase().includes(term)
          );
      
          // Update the 'results' state with the filtered results
          setResults({
            ...results,  // Spread the existing state
            result: filteredResults  // Update the 'result' field with filteredResults
          });
        }
      };
    return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sales Channels</h1>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search channels..."
            value={searchTerm}
            onChange={handleFilter}
            className="pl-10 pr-4 py-2 rounded-md border border-muted focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
        {[...results?.result??[]].map((result) => (
          <div key={result.id} className="bg-background border-none rounded-md overflow-hidden shadow-md">
            <div className="p-4">
            <Link href={`channeldetail?id=${result.id}&name=${result.name}&`}>
              <div className="flex items-center mb-2">
                <Image className="w-8 h-8 mr-2" src="/channel/amazon.jpg" width={48} height={48} alt={result.name}/> 
                <h3 className="text-lg font-semibold">{result.name}</h3>
              </div>
             </Link>
              <p className="text-muted-foreground">{result.name}</p>
            </div>
          
          </div>
        ))}
    
      </div>
    </div>
  )
}

function AppleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function ComponentIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ) 
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

 function StoreIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}