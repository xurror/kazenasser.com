import Datatable from "../../_components/datatable";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Good afternoon, Erica
      </h1>
      <div className="mt-8 flex items-end justify-between">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
          Overview
        </h2>
        <div>
          <span
            data-slot="control"
            className="group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent after:has-[[data-focus]]:ring-2 after:has-[[data-focus]]:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none"
          >
            <select
              name="period"
              className="relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)] [&amp;_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600 data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]"
              id="headlessui-select-:r4m:"
            >
              <option value="last_week">Last week</option>
              <option value="last_two">Last two weeks</option>
              <option value="last_month">Last month</option>
              <option value="last_quarter">Last quarter</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
                viewBox="0 0 16 16"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M5.75 10.75L8 13L10.25 10.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.25 5.25L8 3L5.75 5.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <hr
            role="presentation"
            className="w-full border-t border-zinc-950/10 dark:border-white/10"
          />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Total revenue
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            $2.6M
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">
              +4.5%
            </span>
            <span className="text-zinc-500">from last week</span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            className="w-full border-t border-zinc-950/10 dark:border-white/10"
          />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Average order value
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            $455
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20">
              -0.5%
            </span>
            <span className="text-zinc-500">from last week</span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            className="w-full border-t border-zinc-950/10 dark:border-white/10"
          />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Tickets sold
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            5,888
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">
              +4.5%
            </span>
            <span className="text-zinc-500">from last week</span>
          </div>
        </div>
        <div>
          <hr
            role="presentation"
            className="w-full border-t border-zinc-950/10 dark:border-white/10"
          />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Pageviews
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            823,067
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">
              +21.2%
            </span>
            <span className="text-zinc-500">from last week</span>
          </div>
        </div>
      </div>
      <h2 className="mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        Recent orders
      </h2>
      <div className="flow-root">
        <div className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
          <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
            <Datatable />
          </div>
        </div>
      </div>
    </div>
  );
}
