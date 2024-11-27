"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav, { NavItem } from "./nav";
import CrossIcon from "@/icons/cross-icon";
import ThemeSwitcher from "@/components/theme-switcher";
import { useSession } from "next-auth/react";

export default function TopNav({
  navigation,
}: Readonly<{
  navigation: NavItem[];
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession()

  return (
    <div>
      <header className="flex items-center px-4 lg:hidden">
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
          onClick={() => setMobileMenuOpen(true)}
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="mx-4">
          <ThemeSwitcher />
        </div>

        <div className="min-w-0 flex-1">
          <nav className="flex flex-1 items-center gap-4 py-2.5">
            <div aria-hidden="true" className="-ml-4 flex-1"></div>
            <div className="flex items-center gap-3">
              <span className="relative">
                <a
                  aria-label="Search"
                  className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white"
                  href="#"
                >
                  <span
                    className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="relative">
                <a
                  aria-label="Inbox"
                  className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white"
                  href="/demos/sidebar/inbox"
                >
                  <span
                    className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h9.454a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73Zm3.068-5.852A1.25 1.25 0 0 1 5.273 4.5h9.454a1.25 1.25 0 0 1 1.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 0 0-.86.49l-.606 1.02a1 1 0 0 1-.86.49H8.236a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 6 11H2.53l.015-.062 1.523-5.52Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </span>
              <span className="relative">
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&amp;:not(:nth-child(2))]:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white"
                >
                  <span
                    className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  <span
                    data-slot="avatar"
                    className="inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity] rounded-[--avatar-radius] *:rounded-[--avatar-radius]"
                  >
                    <Image
                      src={session?.user?.image ?? "/next.svg"}
                      width={256}
                      height={256}
                      fetchPriority="high"
                      alt="Nasser Kaze"
                      className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-6 w-6"
                      style={{ color: "transparent" }}
                      sizes="3rem"
                    />
                  </span>
                </button>
              </span>
            </div>
          </nav>
        </div>
      </header>

      <PopUpMenu
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
}

const PopUpMenu = ({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  navigation: NavItem[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <Dialog
          static
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="relative z-50"
          aria-modal="true"
          tabIndex={-1}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.15,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="fixed inset-0 bg-black/30"
          >
            <DialogPanel className="h-full fixed inset-x-0 inset-y-0 w-full max-w-80 p-2">
              <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
                <div className="-mb-2 px-4 pt-5">
                  <button
                    aria-label="Close menu"
                    className="-m-1 p-1 px-2"
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CrossIcon />
                  </button>
                </div>

                <Nav navigation={navigation} />
              </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
