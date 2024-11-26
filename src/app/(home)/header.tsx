"use client";

import { IKImage } from "imagekitio-next";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import CrossIcon from "@/icons/cross-icon";
import ThemeSwitcher from "@/components/theme-switcher";

export default function Header({
  navigation,
}: {
  navigation: { name: string; href: string }[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div className="order-last mt-[calc(theme(spacing.6)-theme(spacing.3))]"></div>
      <div
        className="sm:px-8 top-0 order-last -mb-3 pt-3"
        style={{ position: "var(--header-position)" as any }}
      >
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: "var(--header-inner-position)" as any }}
              >
                <div className="relative">
                  <div
                    className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)",
                    }}
                  ></div>
                  <a
                    aria-label="Home"
                    className="block h-16 w-16 origin-left pointer-events-auto"
                    style={{ transform: "var(--avatar-image-transform)" }}
                    href="/"
                  >
                    <IKImage
                      path="nasser_kaze.jpeg"
                      width={512}
                      height={512}
                      fetchPriority="high"
                      alt="Nasser Kaze"
                      className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                      style={{ color: "transparent" }}
                      sizes="4rem"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{ position: "var(--header-position)" as any }}
      >
        <div
          className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          style={{ position: "var(--header-inner-position)" as any }}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div className="pointer-events-auto md:hidden">
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
                    </div>
                    <div
                      hidden
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: "0",
                        padding: "0",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        display: "none",
                      }}
                    />
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              className="relative block px-3 py-3 text-nowrap transition hover:text-teal-500 dark:hover:text-teal-400"
                              href={item.href}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUpMenu
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}

const PopUpMenu = ({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  navigation: { name: string; href: string }[];
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
            <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
              <DialogPanel>
                <div className="flex flex-row-reverse items-center justify-between">
                  <button
                    aria-label="Close menu"
                    className="-m-1 p-1"
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CrossIcon />
                  </button>
                  <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Navigation
                  </h2>
                </div>
                <nav className="mt-6">
                  <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </DialogPanel>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
