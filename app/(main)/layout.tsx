import Feed from "@/components/pages/Feed";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <Feed />
      <main className="p-8 m-auto ml-64">{children}</main>
    </>
  );
}
