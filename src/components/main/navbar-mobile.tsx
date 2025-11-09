import { FileIcon, HouseIcon, SwatchBookIcon, WalletIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------------

export function NavbarMobile() {
  return (
    <div className="z-10 fixed bottom-0 left-0 w-full bg-background text-foreground px-5 border-t">
      <div className="h-[65px] flex items-center">
        <div className="w-full grid grid-cols-5 gap-x-10">
          <Link
            href={paths.dashboard.root}
            className="flex flex-col gap-1 items-center text-[9px] bg-transparent text-foreground"
          >
            <HouseIcon className="size-5" />
            Home
          </Link>
          <Link
            href={paths.dashboard.invoice.root}
            className="flex flex-col gap-1 items-center text-[9px] bg-transparent text-foreground"
          >
            <FileIcon className="size-5" />
            Invoice
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-1 items-center text-[9px] bg-transparent text-foreground"
          >
            <WalletIcon className="size-5" />
            Credit
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-1 items-center text-[9px] bg-transparent text-foreground"
          >
            <SwatchBookIcon className="size-5" />
            Template
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-0.5 items-center text-[9px] bg-transparent text-foreground"
          >
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Account
          </Link>
        </div>
      </div>
    </div>
  );
}
