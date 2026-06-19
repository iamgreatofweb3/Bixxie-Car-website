import "./globals.css";
export const metadata = {
  title: "Welcome to Bixie-Car World",
  description: "Car Renting Website Build by GreatOF web3",
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
