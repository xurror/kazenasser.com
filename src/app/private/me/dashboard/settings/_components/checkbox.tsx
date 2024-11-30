import { classNames } from "@/libs/utils";
import { Field, Checkbox as HeadlessCheckbox, Label } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Checkbox({
  ...props
}: Readonly<{
  name?: string;
  defaultValue?: string;
  "aria-label"?: string;
  type?: string;
}>) {
  return (
    <Field className="flex items-center gap-x-4">
      <HeadlessCheckbox
        // checked={enabled}
        // onChange={setEnabled}
        className={classNames(
          "group size-4 rounded",
          "bg-white/10 dark:data-[checked]:bg-white/25",
          "ring-1 ring-white/15 ring-inset",
          "border border-zinc-950/15 data-[hover]:border-zinc-950/15 data-[checked]:border-zinc-950/30 dark:border-white/15 dark:data-[checked]:border-white/5 dark:data-[checked]:data-[hover]:border-white/5 dark:data-[hover]:border-white/30"
        )}
      >
        <CheckIcon className="hidden stroke-[12px] fill-current size-4 group-data-[checked]:block sm:h-3.5 sm:w-3.5" />
      </HeadlessCheckbox>

      <Label className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
        Show email on public profile
      </Label>
    </Field>
  );
}
