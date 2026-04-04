'use client'

import type { Metadata } from "next";

import "./globals.css";
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import '../css/navbar.css'
import '../css/homePage.css'


const metadata: Metadata = {
  title: "Mc Donalds",
  description: "This is remake of McDonalds website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
