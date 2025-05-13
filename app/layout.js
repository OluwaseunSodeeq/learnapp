import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Geist } from "next/font/google";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const geist = Geist({
  variable: "--geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learn App",
  description: "An app to learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
