import "styles/global.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Feed from "@/components/pages/Feed";
import ReactQueryProvider from "@/hooks/queries/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <Sidebar>
            <Feed />
            {children}
          </Sidebar>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
