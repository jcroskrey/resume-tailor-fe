import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {Providers} from "./providers";
import { UserProvider } from '@auth0/nextjs-auth0/client';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resume Tailor',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en" className="dark" suppressHydrationWarning>
        <UserProvider>
          <body className={inter.className}>
            <Providers>
              {children}
            </Providers>  
          </body>
        </UserProvider>
      </html>
  );
}
