'use client'

import type { Metadata } from "next";

import "./globals.css";
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import '../css/navbar.css'
import '../css/homePage.css'
import '@/css/footer.css'
import '@/css/sectionHero.css'
import '@/css/aboutPage.css'
import '@/css/locationsPage.css'
import '@/css/subscriptionPage.css'
import '@/css/openDoor.css'
import '@/css/career.css'
import '@/css/apply.css'
import '@/css/mcdelivery.css'
import '@/css/downloadApp.css'
import '@/css/ourHistoryPage.css'
import '@/css/newsPage.css'


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
