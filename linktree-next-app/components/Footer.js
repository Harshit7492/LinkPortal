import React from 'react';
import Head from 'next/head';

export default function App() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className="bg-neutral-200 text-center dark:bg-blue-950 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2024 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-300 font-semibold"
            href="linkPortal"
          >
            LinkPortal
          </a>
        </div>
      </footer>
    </>
  );
}
