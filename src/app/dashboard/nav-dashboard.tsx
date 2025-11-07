import { FileIcon, HouseIcon, SwatchBookIcon, UserIcon } from "lucide-react";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------------

const icons = {
  house: <HouseIcon size={20} />,
  file: <FileIcon size={20} />,
  swatchBook: <SwatchBookIcon size={20} />,
  user: <UserIcon size={20} />,
};

// ------------------------------------------------------------------

export const dashboardNavData = [
  { href: paths.dashboard.root, label: "Dashboard", icon: icons.house },
  { href: paths.dashboard.invoice.root, label: "Invoice", icon: icons.file },
  {
    href: paths.dashboard.template.root,
    label: "Template",
    icon: icons.swatchBook,
  },
  { href: paths.dashboard.member.root, label: "Member", icon: icons.user },
];
