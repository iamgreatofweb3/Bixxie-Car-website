import { title } from "framer-motion/client";
import "./globals.css";
import { URLPattern } from "next/server";
export const metadata = {
  title: "Welcome to Bixie-Car World",
  description: "Car Renting Website Build by GreatOfWeb3",
  openGraph:{
    title:"Welcome to Bixxie-Car-World",
    description:"Affordable and reliable Car renting services",
    images:[
      {
        url :"/car1.png",
        width:1200,
        height:630,
        alt :"Bixxie Car Rental"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
