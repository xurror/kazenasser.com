export default function CrossIcon({
    className="h-5 w-5 text-zinc-500 dark:text-zinc-400",
    ...props
    }: {
    className?: string;
    [x: string]: any;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
