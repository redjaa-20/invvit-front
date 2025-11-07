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
        <main className="flex-1 px-5 xl:px-0 pt-20 md:pt-25">{children}</main>
      </div>
    </div>
  );
}
