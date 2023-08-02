import "styles/global.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import MainPage from "@/components/pages/MainPage";
import ReactQueryProvider from "@/hooks/queries/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="ko">
        <body>
          <Sidebar>
            <MainPage></MainPage>
            {children}
          </Sidebar>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
