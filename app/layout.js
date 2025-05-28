// RootLayout.js
import './globals.css';
import { DM_Sans } from 'next/font/google';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Learn App',
  description: 'An app to learn',
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className={dmSans.variable}>
      <body className="antialiased min-h-screen w-full bg-base100">
        <div className="mx-auto flex max-w-[1440px] min-h-screen">
          {/* Sidebar */}
          <aside className="bg-base100 pl-4 mr-0 h-full w-[15rem] xxl:w-[18rem] flex-shrink-0">
            <Navigation />
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 relative bg-base100 w-full">
            {/* Fixed Header */}
            <header className="fixed top-0 right-0 z-0 bg-base100 h-[4rem] w-[calc(100%-15rem)] 2xl:w-[calc(100%-18rem)] px-4 py-2 border-b border-gray-200">
              <Header />
            </header>

            {/* Dynamic Page Content */}
            <section className="mt-[4rem] h-[calc(100vh-4rem)] overflow-y-auto p-4">
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}







