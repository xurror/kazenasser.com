export default function StatsBoxes() {
  return (
    <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      <div>
        <hr
          role="presentation"
          className="w-full border-t border-zinc-950/10 dark:border-white/10"
        />
        <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
          Total revenue
        </div>
        <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div>
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
        <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$455</div>
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
        <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">5,888</div>
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
        <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Pageviews</div>
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
  );
}
