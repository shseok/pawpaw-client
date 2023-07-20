import Sidebar from "@/components/ui/Sidebar/Sidebar";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Sidebar />
        <main className="p-8 m-auto ml-64 ">
          <div className="relative h-screen border-2">
            <div className="w-[1028px] border-2 border-black h-screen">피드</div>
            <div className="fixed flex flex-col bg-white border-2 border-red-500 top-8 right-8 w-[517px]">
              <div>dddddddddddddddddddddddddddddddddddddddddddddddddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
              <div>ddd</div>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
