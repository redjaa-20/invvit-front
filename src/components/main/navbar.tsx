import Link from "next/link";
import { paths } from "src/routes/paths";
import Logo from "../logo/logo";
import { dashboardNavData } from "src/app/dashboard/nav-dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

// ------------------------------------------------------------------

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background text-foreground backdrop-blur-lg px-3 md:px-5 xl:px-0">
      <div className="max-w-7xl mx-auto h-[65px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href={paths.dashboard.root} className="flex items-center gap-2">
            <Logo className="h-6" />
            <h1 className="text-lg font-semibold tracking-tight">InvvitApp</h1>
          </Link>
          <div className="hidden md:flex gap-7 text-[13px]">
            {dashboardNavData.map((nav, i) => (
              <Link href={nav.href} key={i}>
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
        <Button variant="ghost" className="h-11 pl-1.5 pr-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="hidden md:block text-sm font-medium">
            Reinaldi Djamil
          </h1>
        </Button>
      </div>
    </header>
  );
}
