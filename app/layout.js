import './globals.css';
import { DM_Sans } from 'next/font/google';
import ClientLayout from './Components/ClientLayout';

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}






