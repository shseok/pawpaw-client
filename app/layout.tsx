/* eslint-disable import/no-extraneous-dependencies */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryProvider from '@/hooks/queries/ReactQueryProvider';
import 'styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <ReactQueryProvider>
        <ToastContainer limit={5} />
        <body>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
