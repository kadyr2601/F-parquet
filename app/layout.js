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
          duration: 1000,
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
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16775442819"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16775442819');`}
      </script>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
