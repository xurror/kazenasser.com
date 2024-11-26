"use client";

import BroadcastsIcon from "@/icons/broadcasts-icon";
import EventsIcon from "@/icons/events-icon";
import HomeIcon from "@/icons/home-icon";
import OrdersIcon from "@/icons/orders-icon";
import SettingsIcon from "@/icons/settings-icon";
import NavMenu from "./nav-menu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      <NavMenu navigation={navigation} />
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
        <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          {children}
        </div>
      </main>
    </div>
  );
}
