// import Image from "next/image";
// import logo from "@/assets/images/logo.png";
import Card from "./Card";
import SidebarLink from "./SidebarLink";

// Optional Logo

// These links will be passed down to the SidebarLink component
const links = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

// Loop through the links and render a SidebarLink component for each one
const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (
        <SidebarLink link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;

// For logo when implemented:
//   <div className="w-full flex justify-center items-center">
//     <Image src={logo} alt="Able logo" priority className="w-14" />
//   </div>;


// q: what does SOILD stand for in 00 programming?
// a: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion