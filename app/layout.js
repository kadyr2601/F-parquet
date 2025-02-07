'use client';
import "./globals.scss";
import "aos/dist/aos.css"
import React, {useEffect} from "react";
import AOS from "aos";


export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init(
        {
          delay: 300,
          once: false,
          duration: 1200,
        }
    )
  }, [])


  return (
    <html lang="en">
    <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Neue+Montreal:wght@400;700&display=swap"
          rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"/>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
