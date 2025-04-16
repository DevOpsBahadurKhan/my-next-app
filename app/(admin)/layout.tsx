// app/(admin)/layout.tsx
import "../globals.css";
import AdminHeader from "./AdminHeader";
import SideNav from "./SideNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar - Left */}
          <SideNav />

          {/* Main Content - Right */}
          <main className="flex-1 bg-gray-100 p-6">
              {/* Header */}
              <AdminHeader />

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
