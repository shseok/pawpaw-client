import Sidebar from "@/components/ui/Sidebar/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex w-full p-8">{children}</main>
    </div>
  );
}
