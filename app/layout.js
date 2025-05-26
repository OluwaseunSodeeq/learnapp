import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

import { DM_Sans } from "next/font/google";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";


export const metadata = {
  title: "Learn App",
  description: "An app to learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      {/* <body className={`antialiased h-screen ${dmSans.variable}`}> */}
      <body className={`antialiased h-screen `}>

        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-full bg-base100 p-4  z-50">
          <Navigation />
        </aside>

        <main className="ml-[18rem] h-full bg-base100 w-[100%-20rem] relative overflow-hidden">
          {/* Header  */}
          <header className="fixed top-0 left-[18rem] right-0 h-[4rem] bg-base100 px-4 py-2 z-40 pb-3">
            <Header />
          </header>

          {/* Dynamic Content */}
          <section className="mt-[4rem] h-[calc(100vh-4rem)] overflow-y-auto p-4">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}



