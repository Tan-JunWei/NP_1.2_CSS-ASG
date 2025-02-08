/* Client wrapper component for the client-side layout done by: Tan Jun Wei */

'use client';

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Navbar from "@/src/components/navbar/navbar";
import Loading from "@/src/app/loading"; 

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This will run on mount and whenever the route changes
    const handleRouteChange = () => {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
      
      // Use requestAnimationFrame to wait for the next paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        });
      });
    };

    handleRouteChange();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pathname, searchParams]); // Re-run when the route changes

  return (
    <>
      <Navbar setLoading={setIsLoading} />
      {isLoading && <Loading />}
      <main className="main-content">{children}</main>
    </>
  );
}
