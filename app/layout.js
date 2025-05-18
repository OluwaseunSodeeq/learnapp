import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learn App",
  description: "An app to learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased h-screen ${dmSans.variable}`}>

        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-full w-[18rem] bg-base100 p-4 border-r border-dotted z-50">
          <Navigation />
        </aside>

        <main className="ml-[18rem] h-full bg-base100 relative">
          {/* Header  */}
          <header className="fixed top-0 left-[18rem] right-0 h-[4rem] bg-base100 px-4 py-2 z-40 border-b border-dotted">
            <Header />
          </header>

          {/* Dynamic Content */}
          <section className="pt-[4rem] h-[calc(100vh-4rem)] overflow-y-auto p-4">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}



