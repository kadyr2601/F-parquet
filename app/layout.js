import "./globals.scss";


export const metadata = {
  title: "FIXWORKS-PARQUET",
  description: "Fixworks Parquet service",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <script>
        AOS.init();
      </script>
      <link
          href="https://fonts.googleapis.com/css2?family=Neue+Montreal:wght@400;700&display=swap"
          rel="stylesheet"
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
