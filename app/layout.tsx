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
    <ReactQueryProvider>
      <html lang="ko">
        <body>
          <Sidebar>
            <Feed />
            {children}
          </Sidebar>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
