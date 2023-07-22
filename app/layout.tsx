import "../styles/globals.css";
import MainPage from "@/components/pages/MainPage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="fixed left-0 w-64 h-screen bg-blue-300">d</div>
        <main className="p-8 m-auto ml-64 ">
          <div className="flex h-screen gap-10 border-2 ">
            <div className="h-screen border-2 border-black">
              <MainPage></MainPage>
            </div>
            <div className="flex-col bg-white border-2 border-red-500 top-8 right-8">
              <div>ddddddddddddd</div>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
