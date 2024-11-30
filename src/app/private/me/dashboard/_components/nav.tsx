"use client";

import ThemeSwitcher from "@/components/theme-switcher";
import ChangelogIcon from "@/icons/changelog-icon";
import SupportIcon from "@/icons/support-icon";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export type NavItem = {
  icon: () => JSX.Element;
  label: string;
  href: string;
  current?: boolean | undefined;
};

export default function Nav({
  navigation,
}: Readonly<{
  navigation: NavItem[];
}>) {
  const pathname = usePathname();
  const upcomingEvents: string[] = [];

  const { data: session } = useSession();

  return (
    <nav className="flex h-full min-h-0 flex-col">
      <div className="">
        <div className="flex gap-4 flex-row border-b border-zinc-950/5 py-4 px-3 dark:border-white/5 [&amp;>[data-slot=section]+[data-slot=section]]:mt-2.5">
          <div className="pointer-events-auto">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className={
                "group rounded-full bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-950 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" +
                " flex w-full items-center gap-3 text-left sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400"
              }
            >
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              <span
                data-slot="avatar"
                className="inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity] rounded-full *:rounded-full"
              >
                <img className="size-full" src="/placeholder.webp" alt="" />
              </span>
              <span className="truncate">TitanForge</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      {/* <div className="flex flex-col border-b border-zinc-950/5 py-4 px-3 dark:border-white/5">
        <div
          data-slot="section"
          className="max-lg:hidden flex flex-col pt-4 gap-0.5"
        >
          <span className="relative">
            <a
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
              type="button"
              href="#"
            >
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              <SearchIcon />
              <span className="truncate">Search</span>
            </a>
          </span>
          <span className="relative">
            <a
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
              type="button"
              href="/demos/sidebar/inbox"
            >
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              <InboxIcon />
              <span className="truncate">Inbox</span>
            </a>
          </span>
        </div>
      </div> */}
      <div className="flex flex-1 flex-col overflow-y-auto p-4">
        <div data-slot="section" className="flex flex-col gap-0.5">
          {navigation.map(({ icon: Icon, label, href }) => {
            const current = href === pathname;
            return (
              <span className="relative" key={label}>
                {current && (
                  <span
                    className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
                    style={{ opacity: 1 }}
                  ></span>
                )}
                <a
                  className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 hover:bg-zinc-950/5 data-[slot=icon]:*:hover:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current=true]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:hover:bg-white/5 dark:data-[slot=icon]:*:hover:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current=true]:fill-white"
                  data-current={current}
                  type="button"
                  href={href}
                >
                  <span
                    className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  <Icon data-slot="icon" />
                  <span className="truncate">{label}</span>
                </a>
              </span>
            );
          })}
        </div>
        <div
          data-slot="section"
          className="max-lg:hidden flex flex-col gap-0.5 mt-8"
        >
          <h3 className="mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400">
            Upcoming Events
          </h3>
          {upcomingEvents.map((event) => (
            <span className="relative" key={event}>
              <a
                className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
                type="button"
                href="#"
              >
                <span
                  className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                  aria-hidden="true"
                ></span>
                {event}
              </a>
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="mt-8 flex-1"></div>
        <div data-slot="section" className="flex flex-col gap-0.5">
          <span className="relative">
            <a
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
              type="button"
              href="#"
            >
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              <SupportIcon />
              <span className="truncate">Support</span>
            </a>
          </span>
          <span className="relative">
            <a
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
              type="button"
              href="#"
            >
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              <ChangelogIcon />
              <span className="truncate">Changelog</span>
            </a>
          </span>
        </div>
      </div>
      <div className="max-lg:hidden flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&amp;>[data-slot=section]+[data-slot=section]]:mt-2.5">
        <div data-slot="section" className="flex flex-col gap-0.5">
          <span className="relative">
            <button
              id="headlessui-menu-button-:r34:"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className="cursor-default flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white"
            >
              <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
              <span className="flex min-w-0 items-center gap-3">
                <span
                  data-slot="avatar"
                  className="size-10 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity] rounded-[--avatar-radius] *:rounded-[--avatar-radius]"
                >
                  <Image
                    src={session?.user?.image ?? "/next.svg"}
                    width={256}
                    height={256}
                    fetchPriority="high"
                    alt="Nasser Kaze"
                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-10 w-10"
                    style={{ color: "transparent" }}
                    sizes="3rem"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                    Nasser
                  </span>
                  <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                    {session?.user?.email}
                  </span>
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}
