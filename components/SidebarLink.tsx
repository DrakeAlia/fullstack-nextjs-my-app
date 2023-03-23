"use client";

import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// We want to highlight the icon of the route that were currently on (the active route),
// And we only have access to what route we are on the client, because we can't do it on the server,
// we don't have access to it(Can't use a hook on the server).

// You can not pass props to a server component passing down to a client component.
// There's a network barrier there, so you can't pass props from the server to the client.

const icons = { Settings, User, Grid, Calendar };
// This is our client side component and it's going to be rendered on the server.
const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  // We want to highlight the icon of the route that were currently on (the active route),
  let isActive = false;

  // If the pathname is the same as the link, then we are on the active route.
  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link}>
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
