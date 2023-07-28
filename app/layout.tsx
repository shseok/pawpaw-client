import "../styles/globals.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Sidebar>
          <main className="p-8 m-auto ml-64">{children}</main>
        </Sidebar>
      </body>
    </html>
  );
}
