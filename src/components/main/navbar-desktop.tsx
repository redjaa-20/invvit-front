"use client";

import Link from "next/link";
import { paths } from "src/routes/paths";
import Logo from "../logo/logo";
import { dashboardNavData } from "src/app/dashboard/nav-dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronRightIcon, CrownIcon } from "lucide-react";
import { Progress } from "../ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

// ------------------------------------------------------------------

export function NavbarDesktop() {
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-11 px-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="hidden md:block text-sm font-medium">
                Reinaldi Djamil
              </h1>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-65" align="end">
            <DropdownMenuGroup>
              <div className="flex flex-col gap-1 px-1.5">
                <div className="flex items-center gap-3 py-1.5">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h1 className="hidden md:block text-sm font-medium">
                      Reinaldi Djamil
                    </h1>
                    <p className="text-xs">kianred20@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-accent rounded-md h-11 text-[13px] pl-3 pr-1.5 mb-1">
                  <div className="flex items-center gap-1">
                    <CrownIcon size={16} className="h-3" />
                    <p>Starter Plan</p>
                  </div>
                  <Button size="sm">Upgrade</Button>
                </div>
                <div className="flex flex-col gap-4 bg-accent rounded-md p-3 text-[13px] mb-1">
                  <div className="flex items-center justify-between">
                    <h1 className="font-medium">Credits</h1>
                    <Link
                      href="#"
                      className="flex items-center text-neutral-600 dark:text-neutral-300"
                    >
                      4 tersisa
                      <ChevronRightIcon size={15} />
                    </Link>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <Progress value={80} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>4/5 credit</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-[0.813rem]">
              Dapatkan credit gratis
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[0.813rem]">
              Tampilan
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[0.813rem]">
              Bantuan
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[0.813rem]">
              Setelan
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-[0.813rem]">
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
