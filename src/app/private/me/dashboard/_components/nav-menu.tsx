"use client";

import BroadcastsIcon from "@/icons/broadcasts-icon";
import EventsIcon from "@/icons/events-icon";
import HomeIcon from "@/icons/home-icon";
import OrdersIcon from "@/icons/orders-icon";
import SettingsIcon from "@/icons/settings-icon";
import Nav from "./nav";
import TopNav from "./top-nav";

export default function NavMenu() {
  const navigation = [
    { icon: HomeIcon, label: "Home", href: "/demos/sidebar", current: true },
    { icon: EventsIcon, label: "Events", href: "/demos/sidebar/events" },
    { icon: OrdersIcon, label: "Orders", href: "/demos/sidebar/orders" },
    {
      icon: BroadcastsIcon,
      label: "Broadcasts",
      href: "/demos/sidebar/broadcasts",
    },
    { icon: SettingsIcon, label: "Settings", href: "/demos/sidebar/settings" },
  ];

  return (
    <div>
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <Nav navigation={navigation} />
      </div>
      <TopNav navigation={navigation} />
    </div>
  );
}
