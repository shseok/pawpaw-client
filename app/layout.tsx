/* eslint-disable import/no-extraneous-dependencies */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryProvider from '@/hooks/queries/ReactQueryProvider';
import localFont from 'next/font/local';

import 'styles/global.css';

const myFont = localFont({
  src: './font/SUIT-Variable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={myFont.className}>
      <ReactQueryProvider>
        <body>
          <ToastContainer limit={5} />
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
