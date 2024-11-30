import { classNames } from "@/libs/utils";

export default function TextArea({
  ...props
}: Readonly<{ name?: string; defaultValue?: string; "aria-label"?: string }>) {
  return (
    // <FormControl>
    <textarea
      data-invalid={false}
      data-disabled={false}
      className={classNames(
        "rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
        "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
        "bg-transparent dark:bg-white/5 h-full w-full resize-y",
        "border-2 border-zinc-950/10 dark:border-white/5",
        "focus:outline-none focus:outline-2 focus:-outline-offset-2",
        "hover:border-zinc-950/25 dark:hover:border-white/15",
        "focus:outline-zinc-950/40 dark:focus:outline-white/20",
        "data-[invalid=true]:border-red-500/75 data-[invalid=true]:hover:border-red-500",
        "data-[disabled=true]:border-zinc-950/5 focus:data-[disabled=true]:outline-none data-[disabled=true]:text-zinc-950/50",
        "dark:data-[disabled=true]:border-white/15 dark:data-[disabled=true]:bg-white/[2.5%] dark:data-[disabled=true]:text-white/50"
      )}
      // name="name"
      // value="Catalyst"
      {...props}
    />
    // </FormControl>
  );
}
