import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryProvider from '@/hooks/queries/ReactQueryProvider';
import localFont from 'next/font/local';
import 'styles/global.css';

const myFont = localFont({
  src: '../font/SUIT-Variable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={myFont.className}>
      <head>
        <link rel="icon" href="/images/image.png" />
      </head>
      <ReactQueryProvider>
        <body>
          <ToastContainer />
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
