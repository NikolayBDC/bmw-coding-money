import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Topbar } from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:pl-64">
        <Topbar />
        <main className="p-4 md:p-8 pb-20 md:pb-8">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
