import ReactQueryProvider from "@/hooks/queries/ReactQueryProvider";
import "styles/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <ReactQueryProvider>
        <body>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
