import "./globals.scss";
import "aos/dist/aos.css"


export const metadata = {
  title: "FIXWORKS-PARQUET",
  description: "Fixworks Parquet service",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Neue+Montreal:wght@400;700&display=swap"
          rel="stylesheet"
      />
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
