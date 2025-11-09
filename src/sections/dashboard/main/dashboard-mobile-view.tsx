import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

// ------------------------------------------------------------------

export function DashboardMobileView() {
  return (
    <div className="flex flex-col">
      {/* Welcome */}
      <div className="fixed top-0 left-0 bg-background flex items-center gap-3 w-full h-20 pl-5 pr-2">
        {/* <div className="flex items-center gap-3"> */}
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-tight">
            Halo, Reinaldi!
          </h1>
          <p className="text-xs">Selamat datang di Invvit App</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
