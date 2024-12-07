import Checkbox from "./_components/checkbox";
import Input from "./_components/input";
import TextArea from "./_components/textarea";
import ComboBox from "./_components/combobox";
import { Button } from "@headlessui/react";
import { classNames } from "@/libs/utils";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Page() {
  const { user } = (await getSession()) ?? {};
  // console.log(user);

  return (
    <div className="mx-auto max-w-6xl">
      <form className="mx-auto max-w-4xl" method="post">
        <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
          Settings
        </h1>
        <hr
          role="presentation"
          className="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
        />
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Organization Name
            </h2>
            <p
              data-slot="text"
              className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              This will be displayed on your public profile.
            </p>
          </div>
          <div>
            <Input aria-label="Organization Name" name="name" />
          </div>
        </section>
        <hr
          role="presentation"
          className="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"
        />
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Organization Bio
            </h2>
            <p
              data-slot="text"
              className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              This will be displayed on your public profile. Maximum 240
              characters.
            </p>
          </div>
          <div>
            <TextArea aria-label="Organization Bio" name="bio" />
          </div>
        </section>
        <hr
          role="presentation"
          className="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"
        />
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Organization Email
            </h2>
            <p
              data-slot="text"
              className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              This is how customers can contact you for support.
            </p>
          </div>
          <div className="space-y-4">
            <Input
              aria-label="Organization Email"
              name="email"
              defaultValue="info@example.com"
              type="email"
            />
            <Checkbox />
          </div>
        </section>
        <hr
          role="presentation"
          className="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"
        />
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Address
            </h2>
            <p
              data-slot="text"
              className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              This is where your organization is registered.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <span className="col-span-2">
              <Input
                aria-label="Street Address"
                name="address"
                defaultValue="147 Catalyst Ave"
              />
            </span>

            <span className="col-span-2">
              <Input aria-label="City" name="city" defaultValue="Toronto" />
            </span>

            <ComboBox />

            <Input
              aria-label="Postal code"
              name="postal_code"
              defaultValue="A1A 1A1"
            />

            <span className="col-span-2">
              <ComboBox />
            </span>
          </div>
        </section>
        <hr
          role="presentation"
          className="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"
        />
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              Currency
            </h2>
            <p
              data-slot="text"
              className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              The currency that your organization will be collecting.
            </p>
          </div>
          <div>
            <ComboBox />
          </div>
        </section>
        <hr
          role="presentation"
          className="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"
        />
        <div className="flex justify-end gap-4">
          <button
            type="reset"
            className="relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent text-zinc-950 data-[active]:bg-zinc-950/5 data-[hover]:bg-zinc-950/5 dark:text-white dark:data-[active]:bg-white/10 dark:data-[hover]:bg-white/10 [--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)] cursor-default"
          >
            <span
              className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
            Reset
          </button>
          <Button
            className={classNames(
              "inline-flex items-center gap-2 rounded-lg focus:outline-none",
              "text-base/6 sm:text-sm/6 text-white font-semibold",
              "shadow-inner shadow-white/10 disabled:shadow-none",
              "py-1.5 px-3",
              "bg-zinc-950 dark:bg-white/20",
              "data-[focus]:outline-1 data-[focus]:outline-white",
              "data-[hover]:bg-gray-600 data-[open]:bg-gray-700 "
            )}
          >
            Save Data
          </Button>
          {/* <Button
            className={classNames(
              "rounded-lg",
              "text-base/6 sm:text-sm/6 text-white",
              // "bg-zinc-950 dark:bg-white/20", // outlined
              "data-[hover]:bg-zinc-950/70 data-[active]:bg-zinc-950/50",
              "dark:data-[hover]:bg-white/40 dark:data-[active]:bg-white/60",
              "px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
              "shadow-sm disabled:shadow-none"
            )}
          >
            Save changes
          </Button> */}
          <Button
            className={classNames(
              "rounded-lg",
              "text-base/6 sm:text-sm/6 dark:text-white font-semibold",
              "text-base/6 sm:text-sm/6 text-white",
              "bg-zinc-950 dark:bg-white/20",
              "data-[hover]:bg-zinc-950/70 data-[active]:bg-zinc-950/50",
              "dark:data-[hover]:bg-white/40 dark:data-[active]:bg-white/60",
              "px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
              "shadow-sm disabled:shadow-none"
            )}
          >
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
}
