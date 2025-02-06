/* Client wrapper component for the client-side layout done by: Tan Jun Wei */

'use client';

import React, { useState, useEffect } from "react";
import Navbar from "@/src/components/navbar/navbar";
import Loading from "@/src/app/loading"; 

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only run this on the client side
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);
  
  return (
    <>
      <Navbar setLoading={setIsLoading} />
      {isLoading && <Loading />}  {/* Show Loading component when isLoading is true */}
      <main className="main-content">{children}</main>
    </>
  );
}