import { Navbar } from "src/components/main/navbar";

// ------------------------------------------------------------------

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main className="flex-1 px-5 xl:px-0 pt-5 pb-25 md:pt-25 md:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}
